import { io } from 'socket.io-client';
import appActions from './redux/actions/appActions';

class ConnectionManager {
    constructor() {
        this.url = 'http://localhost:5000';
        this.query = {};
        this.options = {
            transports: [ 'polling', 'websocket' ],
        }
        this.eventsToRespond = [ 'SERVER_CONENCTED', 'NOT_AUTHENTICATED', 'AUTHENTICATED', 'RECEIVE_MESSAGE', 'SEND_MESSAGE' ];
        this.socket = {};
    }

    connect = (callBacks, dispatcher) => {
        if(this.socket.connected || this.socket.disconnected) {
            this.socket.connect();
        } else {
            this.dispatcher = dispatcher;
            this.options.query = this.query;
            this.socket = io(this.url, this.options);
            // this.socket.on('connect', () => callBacks(this.socket));
            // this.socket.on('connect_error', () => callBacks(this.socket));
            // this.socket.on('disconnect', () => callBacks(this.socket));
            this.eventsToRespond.forEach((customEvent) => {
                this.socket.on(customEvent, (payload) =>  this.eventCatcher(customEvent, payload));
            });
        }
        return this.socket;
    }

    eventCatcher = (customEvent, payload) => {
        appActions.catchEvent(this.dispatcher, {
            payload,
            event: customEvent
        });
    }

    disconnect = () => {
        return this.socket.disconnect();
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