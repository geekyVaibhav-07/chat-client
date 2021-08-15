import React from 'react';
import FlexBox from '../atoms/flexBox';
import Image from '../atoms/image';

const HeaderAccount = (props) => {
    const { name, profileSrc } = props;

    return (
        <FlexBox>
            <div>
                {name}
            </div>
            <div style = {{ width: '50px', height: '50px' }}>
                <Image src={profileSrc} />
            </div>
        </FlexBox>
    )
}

export default HeaderAccount