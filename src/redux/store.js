import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './reducers/messageReducer';
import connectionReducer from './reducers/connectionReducer';
import profileReducer from './reducers/profileReducer';

const initialState = {
    messageMap: {},
    profile: {},
    connection: {
        isOnline: false
    }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    messageMap: messageReducer,
    profile: profileReducer,
    connection: connectionReducer
});

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;