import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import connection from './connectToServer';

const addNewMessage = (messageMap, payload) => {
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
    connection.emitEvent(customEvent, messageObject);
    
    return {
        ...messageMap,
        [recipient]: allMessages
    };
};

const  receiveMessage = (messageMap, payload) => {
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



const messageReducer = (messageMap, action) => {
    switch(action.type) {
    case 'RECEIVE_MESSAGE':
        return receiveMessage(messageMap, action.payload);
    case 'SEND_MESSAGE':
        return addNewMessage(messageMap, action.payload);
        
    default :
        return messageMap || {};
    }
};

const updateProfile = (profile, payload) => {
    if(payload.name) {
        connection.setQuery({ name: payload.name })
    }
    return {
        ...profile,
        ...payload
    }
}

const profileReducer = (profile, action) => {
    switch(action.type) {
    case 'UPDATE_PROFILE':
        return updateProfile(profile, action.payload)
        
    default :
        return profile || {};
    }
};

const connectionReducer = (conn, action) => {
    switch(action.type) {
    default :
        return connection;
    }
};

const initialState = {
    messageMap: {},
    profile: {},
    connection: connection
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    messageMap: messageReducer,
    profile: profileReducer,
    connection: connectionReducer
});

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;