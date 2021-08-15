import React from 'react';
import Status from '../atoms/led';
import Image from '../atoms/image';
import FlexBox from '../atoms/flexBox';

const Header = () => {

    return (
        <div className = 'Header'>
            <FlexBox>
                <div style = {{ width: '50%' }}>
                    <FlexBox>
                        <Image />
                    </FlexBox>
                </div>
                <div style = {{ width: '50%' }}>
                    <FlexBox reverse={true}>
                        <Status />
                    </FlexBox>
                </div>
            </FlexBox>
        </div>
    )
}

export default Header
