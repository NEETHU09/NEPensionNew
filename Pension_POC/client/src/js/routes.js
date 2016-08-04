var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var ps1 = require('./pages/ps1/ps1');
var ps2 = require('./pages/ps2/ps2');
var offshore = require('./pages/offshore/offshore');
var scottish = require('./pages/scottish/scottish');

module.exports = (
        <Route>
            <Route handler={Master}>
                <DefaultRoute handler={Home} name="Home"/>
            </Route>
            <Route handler={Home} name="HomePage" path="/home"/>
            <Route handler={ps1} name="ps1" path="/ps1"/>
            <Route handler={ps2} name="ps2" path="/ps2"/>
            <Route handler={offshore} name="offshore" path="/offshore"/>
            <Route handler={scottish} name="scottish" path="/scottish"/>
        </Route>
);
