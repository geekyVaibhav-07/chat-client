import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBox from './chatBox';
import ConnectionStatus from './conenctionStatus';
import Profile from './profile';
import './App.css';

function App() {
    const connection = useSelector(state => state.connection);

    const [ peer, setPeer ] = useState('');
    const [ connectionStatus, setConnectionStatus ] = useState(false);
    const [ chatBoxPeer, setChatBoxPeer ] = useState('');

    const handlePeer = (e) => {
        setPeer(e.target.value)
    }

    const handleChatBoxPeer = () => {
        setChatBoxPeer(peer)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        connection.dispatcher = dispatch;
    }, [ dispatch, connection ]);

    const handleConenctionRequest = () => {
        if(!connection.socket.connected) {
            connection.connect(handleConnectionStatus);
        } else {
            connection.disconnect();
        }
    }

    const handleConnectionStatus = (socket) => {
        if(socket.connected) {
            setConnectionStatus(true);
        } else {
            setConnectionStatus(false);
        }
    }

    const chat = useMemo(() => {
        return (
            <ChatBox name={chatBoxPeer} />
        )
    }, [ chatBoxPeer ]);

    const startButtonText = connectionStatus ? 'Disconnect' : 'Connect'

    return (
        <div className="App">
            <Profile />
            <button onClick={handleConenctionRequest} > {startButtonText} </button>
            <ConnectionStatus isOnline={connectionStatus} />
            <input type='text' value={peer} onChange={handlePeer} />
            <button onClick={handleChatBoxPeer} > Start Chat With </button>
            {chat}
        </div>
    );
}

export default App;
