/* eslint-disable */

import React, { Component } from 'react';

class ComponentOne extends Component {
    render() {
        console.log("State: ", this.state);
        console.log("Props: ", this.props);
        return (
            <h2 className="text-info">Using Class Syntax</h2>
        );
    }
}

// Functional / Stateless / Presentational
const ComponentTwo = function () {
    console.log("this:", this);

    return (
        <h2 className="text-info">Using Anonymous Function Syntax</h2>
    );
}

const ComponentThree = () => {
    console.log("this:", this);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

const ComponentFour = (props) => {
    console.log("props:", props);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

const ComponentFive = ({ id, name }) => {
    console.log("Id: ", id);
    console.log("Name: ", name);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

const ComponentSix = ({ id, name, ...address }) => {
    console.log("Id: ", id);
    console.log("Name: ", name);
    console.log("Address: ", address);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

class ClassVsFunctionalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 1, name: 'Manish', city: 'Pune', state: 'MH' };
    }

    render() {
        return (
            <div>
                {/* <ComponentOne /> */}
                {/* <ComponentTwo /> */}
                {/* <ComponentThree /> */}
                {/* <ComponentFour id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
                {/* <ComponentFour {...this.state} /> */}
                {/* <ComponentFive {...this.state} /> */}
                
                {/* <ComponentSix id={this.state.id}
                    name={this.state.name}
                    city={this.state.city}
                    state={this.state.state} /> */}
                
                <ComponentSix {...this.state} />
            </div>
        );
    }
}

export default ClassVsFunctionalComponent;