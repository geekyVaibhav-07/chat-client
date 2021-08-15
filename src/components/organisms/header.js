import React, { useEffect } from 'react';
import Status from '../atoms/led';
import Image from '../atoms/image';
import FlexBox from '../atoms/flexBox';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '../../redux/actions/appActions';
import HeaderAccount from '../molecules/headerAccount';

const Header = () => {

    const dispatch = useDispatch();
    const { name, profileSrc } = useSelector(state => state.profile)
    const { isOnline } = useSelector(state => state.connection)

    useEffect(() => {
        appActions.connectToServer(dispatch);
        return () => appActions.disconnectFromServer(dispatch);
    }, []);
    
    return (
        <div className = 'Header'>
            <FlexBox>
                <div className = 'Sub-Header'>
                    <FlexBox align='start'>
                        <Image />
                    </FlexBox>
                </div>
                <div className = 'Sub-Header'>
                    <FlexBox align='end'>
                        <HeaderAccount name={name} profileSrc={profileSrc} />
                        <Status color={isOnline ? 'green' : 'red'} />
                    </FlexBox>
                </div>
            </FlexBox>
        </div>
    )
}

export default Header
