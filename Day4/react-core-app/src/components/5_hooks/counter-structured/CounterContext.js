import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null);
const CounterDispatchContext = createContext(null);

export function CounterProvider({ children }) {
    const [counter, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={counter}>
            <CounterDispatchContext.Provider value={dispatch}>
                {
                    children
                        ? children
                        : <h1>No Components to render</h1>
                }
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    );
}

export function useCounter() {
    return useContext(CounterContext);
}

export function useCounterDispatch() {
    return useContext(CounterDispatchContext);
}

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

