const sendMessage = (params) => {
    const { dispatch, payload } = params;
    const {
        contentType = 'text',
        type,
        message,
        sentAt = Date.now(),
        receivedAt,
        messageId,
        recipient
    } = payload

    dispatch({
        type: 'SEND_MESSAGE',
        payload: {
            contentType,
            type,
            message,
            sentAt,
            receivedAt,
            messageId,
            recipient
        }
        
        
    })
}

export {
    sendMessage
}