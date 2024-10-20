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
    const { counter, dispatch } = useCounterContext();

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">{counter.count}</h2>
                </div>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: "inc" }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: "dec" }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterSibling = () => {
    const { counter } = useCounterContext();

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: { counter.count }</h2>
            </div>
        </>
    );
};

// Custom Hook
function useCounterContext() {
    const counter = useContext(CounterContext);
    if (!counter) {
        throw new Error("useCounterContext must be used within CounterProvider");
    }
    return counter;
}

function CounterProvider({ children }) {
    const [counter, dispatch] = useReducer(counterReducer, initialState);

    const providerValue = { counter: counter, dispatch: dispatch };

    return (
        <CounterContext.Provider value={providerValue}>
            {children}
        </CounterContext.Provider>
    );
}

const CounterCustomHookDemo = () => {
    return (
        <CounterProvider>
            <h2 className='text-info'>Custom Hook</h2>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterProvider>
    );
};

export default CounterCustomHookDemo;