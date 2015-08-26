var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (<div>This is the detail page of {this.props.params.id}</div>)
	}
});