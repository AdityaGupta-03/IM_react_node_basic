import React, { Component } from 'react';

class ControlledVsUncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Manish" };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    handleClick(e) {
        // String Refs are deprecated

        // console.log(this.refs);
        // if (this.refs.t1)
        //     this.setState({ name: this.refs.t1.value });

        // if(this.t1)
        //     this.setState({name: this.t1.value});

        if (this.inputRef.current)
            this.setState({ name: this.inputRef.current.value });
    }

    render() {
        return (
            <div>
                <h3 className="text-info">Controlled & Uncontrolled Component</h3>
                {/* <input type="text" />
                <input type="text" defaultValue={"Abhijeet"} />
                <input type="text" value="Abhijeet" readOnly/> */}

                {/* <input type="text" defaultValue={this.state.name} />
                <input type="text" value={this.state.name} readOnly/> */}

                {/* Controlled */}
                {/* <input type="text" value={this.state.name} onChange={this.handleChange} />
                <h2 className="text-info">Name is: {this.state.name}</h2> */}

                {/* Uncontrolled */}
                {/* <input type="text" defaultValue={this.state.name} ref="t1" /> */}
                {/* <input type="text" defaultValue={this.state.name} ref={elem => this.t1 = elem} /> */}
                <input type="text" defaultValue={this.state.name} ref={this.inputRef} />
                <h2 className="text-info">Name is: {this.state.name}</h2>
                <button className='btn btn-primary' onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ControlledVsUncontrolledComponent;