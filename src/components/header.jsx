var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


module.exports = React.createClass({
  render: function() {
    return (<nav className="navbar navbar-default header">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    Employee Portal
                </Link>


                <ul className="nav navbar-nav navbar-right">
                    <Link to="/addemployee">
                      Add Employee
                    </Link> 
                </ul>
            </div>
        </nav>)
  }
});
