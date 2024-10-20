import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterComponent count={this.props.count}
                    inc={this.props.incCounter}
                    dec={this.props.decCounter} />
                <hr />
                <CounterSiblingComponent count={this.props.count} />
            </div>
        );
    }
}

// This method will map the state of Redux Store to the props of your component
function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    };
}

// This method will map the dispatch of Redux Store to the actions given by action creators
function mapDispatchToProps(dispatch) {
    return {
        incCounter: (by) => { dispatch(counterActions.incCounter(by)); },
        decCounter: (by) => { dispatch(counterActions.decCounter(by)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);