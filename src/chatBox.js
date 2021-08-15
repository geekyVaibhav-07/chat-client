import React, { useState } from 'react';
import Message from './message';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from './actions.js';

const ChatBox = (props) => {
    const { name } = props;
    const messagesRow = useSelector(state => {
        const { messageMap= {} } = state;
        const messages = messageMap[name] || [];
        return messages.map((message) => <Message key={message.messageId} message={message} />)
    }) || [];

    const [ newMessage, setNewMessage ] = useState('');
    const dispatch = useDispatch();

    const handleOnChane= (e) => {
        setNewMessage(e.target.value);
    }

    const handleOnClick = () => {
        const payload = {
            recipient: name,
            message: newMessage,
            messageId: Date.now()
        }
        sendMessage({
            dispatch,
            payload
        });
        setNewMessage('');
    }

    return (
        <div>
            {
                messagesRow
            }
            <input type='text' value={newMessage} onChange={handleOnChane} />
            <button onClick={handleOnClick} > SEND </button>
        </div>
    )
}

export default ChatBox;