import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

import * as counterActions from '../../actions/counterActions';

const FCounterContainer = () => {
    const count = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const incCounter = useCallback((by) => { dispatch(counterActions.incCounter(by)); }, []);
    const decCounter = useCallback((by) => { dispatch(counterActions.decCounter(by)); }, []);

    return (
        <div>
            <CounterComponent count={count}
                inc={incCounter}
                dec={decCounter} />
            <hr />
            <CounterSiblingComponent count={count} />
        </div>
    );
};

export default FCounterContainer;