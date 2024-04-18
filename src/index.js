import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/app';
import AboutUs from './components/new';
import Fellowship from './components/about';
import Fellows from './components/fellows';
import * as serviceWorker from './serviceWorker';

const routs = (
    < BrowserRouter >
        <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route path="/womendatafellowship" component={App} />
            <Route path="/lgdatafellowship" component={Fellowship} />
            <Route path="/fellows" component={Fellows} />
        </Switch>
    </ BrowserRouter >
);

ReactDOM.render(routs, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
