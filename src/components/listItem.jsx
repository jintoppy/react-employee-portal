var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
            <div className="employee-row">
              {this.props.item.name}
              <Link to={"/employeedetails/"+this.props.item.empnumber} className="navbar-brand" >
                    ViewDetails
              </Link>
              <button onClick={this.props.onDelete}>Delete</button>

            </div>
        )
  }
});
