var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
            <tr className="employee-row">
              <td>{this.props.item.name}</td>
              <td><Link to={"/employeedetails/"+this.props.item.empnumber} className="navbar-brand" >
                    ViewDetails
              </Link></td>
              <td><button onClick={this.props.onDelete}>Delete</button>
              </td>
            </tr>
        )
  }
});
