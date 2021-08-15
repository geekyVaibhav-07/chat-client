const updateProfile = (profile = {}, payload = {}) => {
    return {
        ...profile,
        ...payload
    }
}

const profileReducer = (profile = {}, action = {}) => {
    switch(action.type) {
    case 'NOT_AUTHENTICATED':
        return {
            ...profile,
            ...action.payload,
            authenticated: false
        }
    case 'UPDATE_PROFILE':
        return updateProfile(profile, action.payload)
        
    default :
        return profile;
    }
};

export default profileReducer;