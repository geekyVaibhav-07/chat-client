import serverConenction from './../../connectToServer';

const connectToServer = (dispatch) => {
    const updateConnectionStatus = () => {
        return true
    }
    return serverConenction.connect(updateConnectionStatus, dispatch);
}

const disconnectFromServer = (dispatch) => {
    const updateConnectionStatus = (socket) => {
        return dispatch({
            type: 'CONNECT',
            payload: {
                status: socket.connected
            }
        });
    }
    return serverConenction.connect(updateConnectionStatus);
}

const catchEvent = (dispatch, { event, payload }) => {
    console.log(event);
    return dispatch({
        payload,
        type: event,
    });
}

const appActions = {
    connectToServer,
    disconnectFromServer,
    catchEvent
}

export default appActions;