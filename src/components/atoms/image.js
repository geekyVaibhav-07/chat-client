import React from 'react';

const Image = (props) => {
    const { src, style } = props

    return (
        <img src={src} styel={style} />
    )
}

export default Image;