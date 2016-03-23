import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import{selectCompany} from '../actions/index';

class StepContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>StepContainer</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.order
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCompany: selectCompany
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StepContainer) ;