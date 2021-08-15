const connectionReducer = (connection = {}, action = {}) => {
    switch(action.type) {
    case 'SERVER_CONENCTED':
        return {
            ...connection,
            isOnline: true
        }
    default :
        return connection;
    }
};

export default connectionReducer;
