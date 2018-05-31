import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import snacks from './snacks';

const rootReducer = combineReducers({
    auth,
    snacks,
    form: formReducer
});

export default rootReducer;
