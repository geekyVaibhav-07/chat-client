import React from 'react';

const Led = (props) => {
    const { online = false, color = online ? 'green' : 'red' } = props;
    const style = {
        'background-color': color
    };

    return (
        <div className='Led' style={style}>

        </div>
    )
}

export default Led;