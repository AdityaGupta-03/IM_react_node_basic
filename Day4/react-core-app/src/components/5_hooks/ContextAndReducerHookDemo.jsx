import React, { useReducer } from 'react';
import { useContext } from 'react';

const CounterContext = React.createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        default:
            throw new Error('Invalid Action Executed...');
    }
}

const Counter = () => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">{context.counter.count}</h2>
                </div>
                <button className="btn btn-primary"
                    onClick={(e) => { context.dispatch({ type: "inc" }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { context.dispatch({ type: "dec" }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterSibling = () => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {context.counter.count}</h2>
            </div>
        </>
    );
};

const ContextAndReducerHookDemo = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider
            value={{ counter: counter, dispatch: dispatch }}>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterContext.Provider>
    );
};

export default ContextAndReducerHookDemo;