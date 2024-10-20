// import React, { Component } from 'react';

// const DataHOC = (InputComponent) => {
//     return class extends Component {
//         static displayName = "DataHOC";

//         componentDidMount() {
//             this.setState({ data: "Data from DataHOC" });
//         }

//         render() {
//             return <InputComponent {...this.state} {...this.prop} />
//         }
//     }
// };

// export default DataHOC;

// ----------------------------------------------- Using Function Syntax

import React, { useState } from 'react';

const DataHOC = (InputComponent) => {
    const Wrapper = (props) => {
        const [state] = useState({ data: "Data from DataHOC" });
        return <InputComponent {...props} {...state} />
    };

    Wrapper.displayName = "DataHOC";

    return Wrapper;
};

export default DataHOC;