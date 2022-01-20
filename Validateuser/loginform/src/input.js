import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <input value={this.props.value}name={this.props.name}onChange={this.props.func} type={this.props.type}></input>
      </div>
    );
  }
}

export default Input;
