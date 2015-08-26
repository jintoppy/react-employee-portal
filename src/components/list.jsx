var React = require('react');
var ListItem = require('./listitem');
var _ = require('lodash');

function getUsers(){

}
var USERLIST = [
  {empnumber: '1348',  name: 'User First'},
  {empnumber: '1475',  name: 'Base User'},
  {empnumber: '852',  name: 'Second User'},
  {empnumber: '4123',  name: 'iPod User'},
  {empnumber: '1023', name: 'iPhone User'},
  {empnumber: '4752',  name: 'Nexus User'}
];

module.exports = React.createClass({
  deleteEmployee: function(empId){
    var employees = this.getEmployees();
    var filtered = _.reject(employees, function(employee){
        return employee.empnumber == empId;
    });
    localStorage.setItem('accion_employees', JSON.stringify(filtered));
    this.setState({
        users: filtered
    });
  },
  getEmployees: function(){
    var employees = localStorage.getItem('accion_employees');
    if(employees){
        employees = JSON.parse(employees);
    }
    else{
        localStorage.setItem('accion_employees',JSON.stringify(USERLIST));
        employees= USERLIST;
    }
    return employees;
  },
  getInitialState: function(){
    return {
        users: this.getEmployees()
    };
  },
  render: function() {
    var rows = this.state.users.map(function(item, index){
        return <ListItem key={index} item={item} onDelete={this.deleteEmployee.bind(this,item.empnumber)} />
    }.bind(this));
    return (
        <div className="employee-list">
            {rows}
        </div>

        )
  }
});
