var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var EmployeeDetails = require('./components/employeeDetails')

module.exports = (
  <Router history={new HashHistory.default}>
    <Route path="/" component={Main} >
    	<Route path="/employeedetails/:id" component={EmployeeDetails} />
    </Route>
  </Router>
);