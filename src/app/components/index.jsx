import React from 'react';

import Flow from './Flow.jsx';
import OrderDetail from './OrderDetail.jsx';
import StepContainer from './StepContainer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Flow />
                <OrderDetail />
                <StepContainer />
            </div>
        );
    }
}
