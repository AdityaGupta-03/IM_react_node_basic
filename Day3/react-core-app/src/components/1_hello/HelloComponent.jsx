// import React from "react";

// class HelloComponent extends React.Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// --------------------------------------

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// --------------------------------------

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     // JSX expressions must have one parent element.
//     // Only One JSX Element can returned
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// -------------------------------------- Fragments

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </React.Fragment>
//         );
//     }
// }

// export default HelloComponent;

// import React, { Component, Fragment } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </Fragment>
//         );
//     }
// }

// export default HelloComponent;

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

// ------------------------------------ Function Syntax

// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Declaration Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Expression Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Arrow Function Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Singleline Arrow Function Syntax!</h1>
//     </>
// );

// export default HelloComponent;

// Class Syntax - Stateful Component / Container Component
// Function Syntax - Stateless Component / Presentational Component

// ----------------------------------------------------  Using CSS

const HelloComponent = () => (
    <div className="container">
        <h1 className="red">Hello World!</h1>
        <h1 className="text-primary">Hello World Again!</h1>
        <h1 className="text-success bi bi-activity"> Activity Icon</h1>
    </div>
);

export default HelloComponent;