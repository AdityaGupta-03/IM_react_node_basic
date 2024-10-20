/* eslint-disable */

import CalculatorAssignment from "../1_assignment/CalculatorAssignment";
import CounterAssignment from "../1_assignment/CounterAssignment";
import CRUD_Assignment from "../1_assignment/CRUD_Assignment";
import ContextAPIDemo from "../2_context-api/ContextAPIDemo";
import SiblingCommunication from "../2_context-api/SiblingCommunication";
import AjaxComponent from "../3_ajax/AjaxComponent";
import PortalRoot from "../4_portals/PortalRoot";
import ContextAndReducerHookDemo from "../5_hooks/ContextAndReducerHookDemo";
import CounterRoot from "../5_hooks/counter-structured/CounterRoot";
import CounterCustomHookDemo from "../5_hooks/CounterCustomHookDemo";
import EffectHookDemo from "../5_hooks/EffectHookDemo";
import EffectHookWithCounter from "../5_hooks/EffectHookWithCounter";
import ReducerHookDemo from "../5_hooks/ReducerHookDemo";
import StateHookDemo from "../5_hooks/StateHookDemo";
import ErrorHandler from "../common/ErrorHandler";

const RootComponent = () => {
    return (
        <div className="container text-center">
            <ErrorHandler>
                {/* <CalculatorAssignment /> */}
                {/* <CounterAssignment /> */}
                {/* <CRUD_Assignment /> */}
                {/* <ContextAPIDemo /> */}
                {/* <SiblingCommunication /> */}
                {/* <AjaxComponent /> */}
                {/* <PortalRoot /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                {/* <EffectHookWithCounter /> */}
                {/* <ReducerHookDemo /> */}
                {/* <ContextAndReducerHookDemo /> */}
                {/* <CounterCustomHookDemo /> */}
                <CounterRoot />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;