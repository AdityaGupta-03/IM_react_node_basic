const card = {
    margin: '1em',
    paddingLeft: 0,
    border: '2px dashed green'
};

const ComponentOne = () => {
    return (
        <>
            <h2 className='text-success'>Hello from Component One</h2>
            <h2 style={card}>From Component One</h2>
        </>
    );
};

export default ComponentOne;