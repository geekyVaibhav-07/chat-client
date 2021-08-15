import { io } from 'socket.io-client';

class ConnectionManager {
    constructor() {
        this.url = 'http://localhost:5000';
        this.query = {};
        this.options = {
            transports: [ 'polling', 'websocket' ],
        }
        this.socket = {};
    }

    receiveMessage = (message) => {
        console.log(message)
        if (this.dispatcher) {
            this.dispatcher({
                type: 'RECEIVE_MESSAGE',
                payload: message
            });
        }
    }

    connect = (callBacks) => {
        if(this.socket.connected || this.socket.disconnected) {
            this.socket.connect();
        } else {
            this.options.query = this.query;
            this.socket = io(this.url, this.options);
            this.socket.on('connect', () => callBacks(this.socket));
            this.socket.on('connect_error', () => callBacks(this.socket));
            this.socket.on('disconnect', () => callBacks(this.socket));
            this.socket.on('receiveMessage', this.receiveMessage);
        }
    }

    disconnect = () => {
        this.socket.disconnect();
    }

    emitEvent = (customEvent, messageObject) =>{
        this.socket.emit(customEvent, messageObject);
        console.log(customEvent, messageObject);
    }

    setQuery = (q) => {
        this.query = {
            ...this.query,
            ...q
        }
    }
}

const connection = new ConnectionManager();

export default connection;