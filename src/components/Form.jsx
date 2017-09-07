import React, { Component } from "react";
import PropTypes from "prop-types";

const Name = props => {
  return (
    <label>
      <input
        type="text"
        name="username"
        onChange={props.handleChangeName}
        value={props.name}
      />
    </label>
  );
};

const Password = props => {
  console.log(props);
  return (
    <label>
      <input
        type="password"
        name="password"
        onChange={props.handleChangePass}
        value={props.pass}
      />
    </label>
  );
};

const Submit = () => {
  return (
    <button type="submit" value="submit">
      Login
    </button>
  );
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { user: "boom", pass: "1337" };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ user: event.target.value });
    console.log("handleChangeName");
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value });
    console.log("handleChangePass");
  }

  handleSubmit(event) {
    console.log("event " + this.state.user + " " + this.state.pass);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Name
            name={this.state.value}
            handleChangeName={this.handleChangeName}
          />
          <Password
            pass={this.state.value}
            handleChangePass={this.handleChangePass}
          />
          <Submit />
        </form>
      </div>
    );
  }
}

export default Form;
