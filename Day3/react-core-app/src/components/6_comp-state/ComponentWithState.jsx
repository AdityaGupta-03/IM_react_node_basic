import React, { Component } from 'react';

class ComponentWithState extends Component {
    state = { name: "Indiamart" };
    
    // constructor() {
    //     super();

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     this.state = { name: "Indiamart" };

    //     console.log("Ctor, State: ", this.state);
    // }

    get cName() {
        if (this.state.name === "Indiamart")
            return "text-success";
        else
            return "text-danger";
    }

    render() {
        console.log("Render, State: ", this.state);

        return (
            <>
                <h2 className="text-primary">Component With State</h2>
                <h2 className={this.cName}>Hello, {this.state.name}</h2>
            </>
        );
    }
}

export default ComponentWithState;