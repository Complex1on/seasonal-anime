import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import animeReducer from './animeReducer';
import dropdownReducer from './dropdownReducer';

export default combineReducers({
    anime: animeReducer,
    dropdown: dropdownReducer,
    form: reduxForm
});
