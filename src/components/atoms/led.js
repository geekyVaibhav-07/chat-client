import React from 'react';

const Led = (props) => {
    const { color = 'white' } = props;
    const style = {
        'background-color': color
    };

    return (
        <div className='Led' style={style}>

        </div>
    )
}

export default Led;