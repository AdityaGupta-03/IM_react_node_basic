// import React from 'react';
// import { useState } from 'react';

// const Counter = (props) => {
//     console.log('Counter rendered : ', props.children);
//     return (
//         <button className='btn btn-primary' onClick={props.handleClick}>
//             {props.children}
//         </button>
//     );
// };

// const CallbackHooks = () => {
//     const [incCount, setIncrement] = useState(0);
//     const [mulCount, setMultiplier] = useState(2);

//     const increment = () => { setIncrement(incCount + 1); }

//     const multiply = () => { setMultiplier(mulCount * 2); }

//     return (
//         <div className='text-center mt-5'>
//             <h2 className="text-primary">
//                 {incCount}
//             </h2>
//             <Counter handleClick={increment}>
//                 Incrementer
//             </Counter>
//             <hr />
//             <h2 className="text-primary">
//                 {mulCount}
//             </h2>
//             <Counter handleClick={multiply}>
//                 Multiplier
//             </Counter>
//         </div>
//     );
// };


// // var f1 = () => { };
// // var f2 = () => { };

// // console.log(f1 === f2);

// export default CallbackHooks;

// ------------------------------------------------------------------
import React, { useCallback } from 'react';
import { useState } from 'react';

const Counter = React.memo((props) => {
    console.log('Counter rendered : ', props.children);
    return (
        <button className='btn btn-primary' onClick={props.handleClick}>
            {props.children}
        </button>
    );
});

const CallbackHooks = () => {
    const [incCount, setIncrement] = useState(0);
    const [mulCount, setMultiplier] = useState(2);

    const increment = useCallback(
        () => { setIncrement(incCount + 1); },
        [incCount]
    );

    const multiply = useCallback(
        () => { setMultiplier(mulCount * 2); },
        [mulCount]
    );

    return (
        <div className='text-center mt-5'>
            <h2 className="text-primary">
                {incCount}
            </h2>
            <Counter handleClick={increment}>
                Incrementer
            </Counter>
            <hr />
            <h2 className="text-primary">
                {mulCount}
            </h2>
            <Counter handleClick={multiply}>
                Multiplier
            </Counter>
        </div>
    );
};


// var f1 = () => { };
// var f2 = () => { };

// console.log(f1 === f2);

export default CallbackHooks;
