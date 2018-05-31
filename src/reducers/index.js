import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import snacks from './snacks';
import reviews from './reviews';

const rootReducer = combineReducers({
    auth,
    snacks,
    reviews,
    form: formReducer
});

export default rootReducer;
