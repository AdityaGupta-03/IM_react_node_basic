import React, { useReducer } from 'react';

// const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        case 'mul':
            return { count: state.count * 2 };
        default:
            throw new Error('Invalid Action Executed...');
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">{state.count}</h2>
                </div>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: 'inc' }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: 'dec' }); }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-primary"
                    onClick={(e) => { dispatch({ type: 'mul' }); }}>
                    <span className='fs-4'>*</span>
                </button>
            </div>
        </>
    );
}

const ReducerHookDemo = () => {
    return (
        <div>
            <Counter />
        </div>
    );
};

export default ReducerHookDemo;