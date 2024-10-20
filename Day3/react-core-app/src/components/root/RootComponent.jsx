/* eslint-disable */

// import ComponentOne from "../2_multi-components/ComponentOne";
// import ComponentTwo from "../2_multi-components/ComponentTwo";

// import ComponentOne from "../3_component-with-css/ComponentOne";
// import ComponentTwo from "../3_component-with-css/ComponentTwo";

// import ComponentOne from "../4_external-css/comp-one/ComponentOne";
// import ComponentTwo from "../4_external-css/comp-two/ComponentTwo";

import ClassVsFunctionalComponent from "../10_class-vs-function/ClassVsFunctionalComponent";
import LCDemoComponent from "../11_life-cycle-demo/LCDemoComponent";
import PureImpureComponent from "../12_pure-vs-impure/PureImpureComponent";
import EventComponent from "../13_synthetic-events/EventComponent";
import ControlledVsUncontrolledComponent from "../14_controlled-vs-uncontrolled/ControlledVsUncontrolledComponent";
import ListRoot from "../15_list/ListComponent";
import CalculatorAssignment from "../16_assignment/CalculatorAssignment";
import CounterAssignment from "../16_assignment/CounterAssignment";
import ComponentOne from "../5_css-modules/comp-one/ComponentOne";
import ComponentTwo from "../5_css-modules/comp-two/ComponentTwo";
import ComponentWithState from "../6_comp-state/ComponentWithState";
import ComponentWithProps from "../7_comp-props/ComponentWithProps";
import PropTypesRoot from "../8_prop-types/PropTypesComponent";
import ComponentWithBehavior from "../9_comp-methods/ComponentWithBehavior";

var data = {
    id: 1,
    name: "Manish",
    address: {
        city: "Pune"
    }
};

const RootComponent = () => {
    return (
        <div className="container">
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}
            {/* <ComponentWithProps
                id={1}
                name={"Manish"}
                address={{ city: "Pune" }}
                display={() => { alert("From Root"); }} /> */}

            {/* <ComponentWithProps
                id={data.id}
                name={data.name}
                address={data.address}
                display={() => { alert("From Root"); }} /> */}

            {/* <ComponentWithProps
                {...data}
                display={() => { alert("From Root"); }} /> */}

            {/* <PropTypesRoot /> */}

            {/* <ComponentWithBehavior /> */}

            {/* <ClassVsFunctionalComponent /> */}

            {/* <LCDemoComponent /> */}

            {/* <PureImpureComponent /> */}

            {/* <EventComponent /> */}

            {/* <ControlledVsUncontrolledComponent /> */}

            {/* <ListRoot /> */}

            <CalculatorAssignment />
            <CounterAssignment />
        </div>
    );
};

export default RootComponent;