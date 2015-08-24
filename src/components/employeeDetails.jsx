var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (<div>This is the employee details page</div>)
  },
  content: function(){
    if(this.props.children){
        return this.props.children;
    }
    else{
        return <List />
    }
  }
});