import Order from '../model/Order';

export const ActionType = {
    Init: 'INIT',
    SelectCompany: 'SELECT_COMPANY',
    SelectProduct: 'SELECT_PRODUCT'
};

export function init(){
    return {
        type: ActionType.Init,
        payload: new Order()
    }
}

export function selectCompany(company){
    return{
        type: ActionType.SelectCompany,
        payload: company
    }
}