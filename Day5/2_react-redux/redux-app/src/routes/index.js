import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

// Eager Loading
import LoaderAnimation from '../components/common/LoaderAnimation';

// Lazy Loading
const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const AboutComponent = lazy(() => import('../components/about/AboutComponent'));
const HOCDemoComponentOne = lazy(() => import('../components/hoc/HOCDemoComponentOne'));
const HOCDemoComponentTwo = lazy(() => import('../components/hoc/HOCDemoComponentTwo'));
const UsingReactMemoHOC = lazy(() => import('../components/hoc/UsingReactMemoHOC'));
const CallbackHooks = lazy(() => import('../components/hoc/CallbackHooks'));
const CounterContainer = lazy(() => import('../containers/counter/CounterContainer'));
const FCounterContainer = lazy(() => import('../containers/counter/FCounterContainer'));
const FCounterRoot = lazy(() => import('../components/f-counter/FCounterRoot'));
const ProductsContainer = lazy(() => import('../containers/products/ProductsContainer'));
const ManageProductContainer = lazy(() => import('../containers/products/ManageProductContainer'));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/hoc1" component={HOCDemoComponentOne} />
            <Route path="/hoc2" component={HOCDemoComponentTwo} />
            {/* <Route path="/memo" component={UsingReactMemoHOC} /> */}
            <Route path="/memo" component={CallbackHooks} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/fcounter" component={FCounterContainer} />
            <Route path="/fcounterroot" component={FCounterRoot} />
            <Route path="/products" component={ProductsContainer} />
            <Route path="/product/:id" component={ManageProductContainer} />
            <Route path="/product" component={ManageProductContainer} />

            {/* <Route path="/hoc1" render={() => (
                <HOCDemoComponentOne data="Data from the Router" />
            )} />
            <Route path="/hoc2" render={() => (
                <HOCDemoComponentTwo data="Data from the Router" />
            )} /> */}
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Suspense>
);

function NoMatch() {
    let location = useLocation();

    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match for <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>
                <div className="mt-5">
                    <img src={img404} alt="Not Found" className="rounded" />
                </div>
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}