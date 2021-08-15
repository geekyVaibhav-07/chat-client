import serverConenction from '../../connectToServer';

const addNewMessage = (messageMap = {}, payload = {}) => {
    const { recipient, type = 'sent', message, sentAt, receivedAt, messageId, contentType = 'text' } = payload;
    const allMessages = messageMap[recipient] || [];
    const messageObject = {
        contentType,
        type,
        message,
        sentAt,
        receivedAt,
        messageId,
        recipient
    }
    allMessages.push(messageObject);
    const customEvent = 'sendMessage';
    serverConenction.emitEvent(customEvent, messageObject);
    
    return {
        ...messageMap,
        [recipient]: allMessages
    };
};

const  receiveMessage = (messageMap = {}, payload = {}) => {
    const { sender, type = 'sent', message, sentAt, receivedAt, messageId, contentType = 'text' } = payload;
    const allMessages = messageMap[sender] || [];
    const messageObject = {
        contentType,
        type,
        message,
        sentAt,
        receivedAt,
        messageId,
        sender
    }
    allMessages.push(messageObject);
    
    return {
        ...messageMap,
        [sender]: allMessages
    };
};



const messageReducer = (messageMap = {}, action = {}) => {
    switch(action.type) {
    case 'RECEIVE_MESSAGE':
        return receiveMessage(messageMap, action.payload);
    case 'SEND_MESSAGE':
        return addNewMessage(messageMap, action.payload);
        
    default :
        return messageMap;
    }
};

export default messageReducer;