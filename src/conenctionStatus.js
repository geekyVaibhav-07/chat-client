import React from 'react';

const Status = (props) => {
    const { isOnline } = props;
    const color = isOnline ? 'green' : 'red';

    return (
        <div style={{ height: '100px', width: '100px', borderRadius: '50px', backgroundColor: color }}>
        </div>
    )
}

export default Status