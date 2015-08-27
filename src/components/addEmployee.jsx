var React = require('react');
var Navigation = require('react-router').Navigation;
var _ = require('lodash');

module.exports = React.createClass({
	mixins: [Navigation],
	render: function(){
		return (
				<form role="form" onSubmit={this.onFormSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input type="text" ref="name" className="form-control" />
					</div>
					<div className="form-group">
						<label>Age</label>
						<input type="number" ref="age" className="form-control" />
					</div>
					<button type="submit" className="btn btn-default">Add Employee</button>
				</form>
			)
	},
	onFormSubmit: function(event){
		event.preventDefault();
		var name_new = this.refs.name.getDOMNode().value,
			age_new = this.refs.age.getDOMNode().value;
		var newEmp = {
			name: name_new,
			age: age_new
		};
		this.addEmployee(newEmp);
	},


	onFormSubmit:function(event){
		event.preventDefault();
		var name_new = this.refs.name.getDOMNode().value,
		age_new = this.refs.age.getDOMNode().value;
		var newEmp = {
			name:name_new,
			age:age_new			
		};
		this.addEmployee(newEmp);
	},
	addEmployee:function(emp){
		emp.empnumber = _.uniqueId();
		var employees = localStorage.getItem('accion_employees');
		if(employees){
			employees = JSON.parse(employees);
			employees.push(emp);
			localStorage.setItem('accion_employees',JSON.stringify(employees));
			this.transitionTo('/');
		}
		
	}
	
});