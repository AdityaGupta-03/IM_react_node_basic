import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link, useLocation, Redirect } from 'react-router-dom';

// Eager Loading
import LoaderAnimation from '../components/common/LoaderAnimation';

import authenticatorClient from '../services/authenticator-api-client';

// Lazy Loading
const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const AboutComponent = lazy(() => import('../components/about/AboutComponent'));
const AdminComponent = lazy(() => import('../components/admin/AdminComponent'));
const LoginComponent = lazy(() => import('../components/login/LoginComponent'));
const ProductsComponent = lazy(() => import('../components/products/ProductsComponent'));

const img404 = require('../assets/http-404.jpg');

const SecuredRoute = ({ component: Component, ...args }) => {
    return (
        <Route {...args} render={
            (props) => authenticatorClient.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } />
    );
}

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/products" component={ProductsComponent} />
            <SecuredRoute path="/admin" component={AdminComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="*">
                <NoMatch />
            </Route>
            {/* <Route path="*" render={() => {
            return (
                <div className="text-center">
                    <article>
                        <h1 className="text-danger">No match Found!</h1>
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
        }} /> */}
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