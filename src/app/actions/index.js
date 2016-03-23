export const ActionType = {
    SelectCompany: 'SELECT_COMPANY',
    SelectProduct: 'SELECT_PRODUCT'
};

export function selectCompany(company){
    return{
        type: ActionType.SelectCompany,
        payload: company
    }
}