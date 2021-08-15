import React from 'react';

const FlexBox = (props) => {
    const { direction = 'row', reverse = false } = props;
    const getFlexBoxType = (direction, reverse) => {
        let flexBoxType = ''
        if (direction === 'row') {
            flexBoxType = 'Row';
        } else {
            flexBoxType = 'Column';
        }
        if (reverse) {
            flexBoxType = `${flexBoxType}-Reverse`;
        }
        return flexBoxType;
    }
    const className = `Flexbox ${getFlexBoxType(direction, reverse)}`;

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default FlexBox;