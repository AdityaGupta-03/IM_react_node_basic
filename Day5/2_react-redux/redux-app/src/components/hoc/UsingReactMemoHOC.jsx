import React from 'react';

const UsingReactMemoHOC = () => {
    const [data1, setData1] = React.useState(0);
    const tickRef = React.useRef();
    tickRef.current = data1;

    const [clicks, setClicks] = React.useState(0);

    setTimeout(() => setData1(data1 + 1), 500);

    return (
        <div className='mt-5'>
            <h2>Parent Rendered at tick {tickRef.current} with clicks {clicks}.</h2>
            <button
                onClick={() => setClicks(clicks + 1)}>
                Add extra click
            </button>
            <Child tickRef={tickRef} clicks={clicks} />
            <MemoChild tickRef={tickRef} clicks={clicks} />
        </div>
    );
};

const Child = ({ tickRef, clicks }) => {
    return <p>Child Rendered at tick {tickRef.current} with clicks {clicks}.</p>;
}

const MemoChild = React.memo(Child);

export default UsingReactMemoHOC;