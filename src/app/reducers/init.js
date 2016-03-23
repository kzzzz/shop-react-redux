import {ActionType} from '../actions/index';
import Order from '../model/Order';

export default (state = null, action)=> {
    switch (action.type) {
        case ActionType.Init:
            return createOrder();
        default:
            return state;
    }

    function createOrder() {
        var order = new Order();
        order.company = 'xxx';
        return order;
    }
}