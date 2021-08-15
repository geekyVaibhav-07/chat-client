import React from 'react';

const FlexBox = (props) => {
    const { direction = 'row', align = 'center' } = props;
    const getFlexBoxType = (direction, align) => {
        let flexBoxType = ''
        if (direction === 'row') {
            flexBoxType = 'Row';
        } else {
            flexBoxType = 'Column';
        }
        if (align === 'start') {
            flexBoxType = `${flexBoxType} Start`;
        } else if (align === 'end') {
            flexBoxType = `${flexBoxType} End`;
        }
        return flexBoxType;
    }
    const className = `Flexbox ${getFlexBoxType(direction, align)}`;

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default FlexBox;