var React = require('react');

module.exports = React.createClass({
  getEmployeeById: function(empId){
    var employees = localStorage.getItem('accion_employees');
    if(employees){
        employees = JSON.parse(employees);
    }
    var filtered = employees.filter(function(emp){
      return emp.empnumber ==empId;
    });
    if(filtered.length>0){
      return filtered[0];
    }

  },
  render: function() {
    var employee = this.getEmployeeById(this.props.params.id);
    return (
        <div>
          {employee.name}
        </div>
        
      )
  }
});