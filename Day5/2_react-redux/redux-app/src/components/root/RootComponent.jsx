/* eslint-disable */

// import { BrowserRouter as Router } from 'react-router-dom';

// import NavigationComponent from "../bs-nav/NavigationComponent";
// import ErrorHandler from "../common/ErrorHandler";

// const RootComponent = () => {
//     return (
//         <div className="container">
//             <ErrorHandler>
//                 <Router>
//                     <NavigationComponent />
//                 </Router>
//             </ErrorHandler>
//         </div>
//     );
// };

// export default RootComponent;

// ------------------------------------------- Custom History

import { Router } from 'react-router-dom';
import history from '../../utilities/history';

import NavigationComponent from "../bs-nav/NavigationComponent";
import ErrorHandler from "../common/ErrorHandler";

const RootComponent = () => {
    return (
        <div className="container">
            <ErrorHandler>
                <Router history={history}>
                    <NavigationComponent />
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;