import {combineReducers} from 'redux';
import  selectedCompanyReducer from 'selectedCompany';

const rootReducer = combineReducers({
    selectedCompany: selectedCompanyReducer
});

export default rootReducer;