// import React, { Component } from 'react';

// class MyPureComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         console.log("MyPureComponent - Render Called....");

//         return (
//             <h1>
//                 Count Value is: {this.state.count}
//             </h1>
//         );
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("MyPureComponent - shouldComponentUpdate...");
//         if (this.state.count !== nextState.count)
//             return true;
//         else
//             return false;
//     }

//     componentDidMount() {
//         this.st = setInterval(() => {
//             // this.setState({ count: this.state.count + 1 });
//             this.setState({ count: 0 });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.st);
//     }
// }

// export default MyPureComponent;

// --------------------------------------------------------

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        console.log("MyPureComponent - Render Called....");

        return (
            <h1>
                Count Value is: {this.state.count}
            </h1>
        );
    }

    componentDidMount() {
        this.st = setInterval(() => {
            // this.setState({ count: this.state.count + 1 });
            this.setState({ count: 0 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.st);
    }
}

export default MyPureComponent;

// React.PureComponent's shouldComponentUpdate() only shallowly compares the objects.
// React.PureComponent's shouldComponentUpdate() skips prop updates for the whole component subtree.