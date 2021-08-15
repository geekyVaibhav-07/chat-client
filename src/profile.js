import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => {
        const { profile: { name } = {} } = state;
        return name;
    });

    const setName = (e) => dispatch({
        type: 'UPDATE_PROFILE',
        payload: {
            name: e.target.value
        }
    });

    return (
        <div>
            <input type='text' value={name} onChange={setName} />
        </div>
    )
}

export default Profile