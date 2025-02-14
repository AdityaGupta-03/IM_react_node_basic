import React, { Component } from 'react';

const ErrorHandlerHOC = (InputComponent) => {
    return class extends Component {
        static displayName = "ErrorHandlerHOC";

        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
                var errImg = require('../../assets/component-error.png');
                return (
                    <div className="text-center mt-5">
                        <img src={errImg} alt="Component Error" className='rounded' />
                    </div>
                );
            } else {
                return <InputComponent {...this.state} {...this.prop} />
            }
        }
    }
};

export default ErrorHandlerHOC;