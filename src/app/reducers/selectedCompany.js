import {ActionType} from '../actions/index';

export default (state = null, action)=> {
    switch (action.type) {
        case ActionType.SelectCompany:
            return state.payload.companyId;
        default:
            return state;
    }
}