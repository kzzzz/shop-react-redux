import React from 'react';

class OrderDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Order detail</h2>
                <div>Company</div>
                <div>Product</div>
            </div>
        )
    }
}

export default OrderDetail;