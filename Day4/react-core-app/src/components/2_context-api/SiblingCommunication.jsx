import React, { Component } from 'react';
import CounterContextProvider, { CounterContext } from '../../context/CounterContext';

class Counter extends Component {
    static contextType = CounterContext;

    constructor(props) {
        super(props);
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
    }

    _inc(e) {
        var [count, setCount] = this.context;
        setCount(count + this.props.interval);
        // throw new Error("Test");
    }

    _dec(e) {
        var [count, setCount] = this.context;
        setCount(count - this.props.interval);
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <h2 className="text-info text-center">
                        {this.context[0]}
                    </h2>
                    <button className="btn btn-info"
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info"
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </>
        );
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }
}

class CounterSibling extends Component {
    static contextType = CounterContext;

    render() {
        // throw new Error("Counter Sibling throwing an Error(Unhandled Exception)...");
        return (
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {this.context[0]} </h2>
            </div>
        );
    }
}

class SiblingCommunication extends Component {
    render() {
        return (
            <div className='mt-5'>
                <CounterContextProvider>
                    <Counter />
                    <hr />
                    <CounterSibling />
                </CounterContextProvider>
            </div>
        );
    }
}

export default SiblingCommunication;