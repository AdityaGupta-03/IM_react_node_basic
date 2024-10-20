import React from 'react';
import { useCounter } from './CounterContext';

const CounterSibling = () => {
    const counter = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {counter.count}</h2>
            </div>
        </>
    );
};

export default CounterSibling;