import React from 'react';
import { useCounter, useCounterDispatch } from './CounterContext';

const Counter = () => {
    const counter = useCounter();
    const dispatch = useCounterDispatch();

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
};

export default Counter;