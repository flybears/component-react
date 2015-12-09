const React = require("react");

const Radio = React.createClass({
    getInitialState: function(){
        return {checked: false};
    },
    propTypes: {
    },
    render: function(){
        return (
            <label>
                <input type="checkbox" ref="checkbox" />
                <span>{this.props.text}</span>
            </label>
        );
    }
});