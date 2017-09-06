import React from "react";

const Users = { username: "leet", password: "1337" };

const Name = props => {
  console.log(props.value.username);
  return (
    <label>
      <input type="text" name="username" value={props.value.username} />
    </label>
  );
};

const Password = props => {
  return (
    <label>
      <input type="password" name="password" value={props.value.password} />
    </label>
  );
};

const Submit = props => {
  return (
    <button onClick={() => props.handleClick()} type="button">
      Login
    </button>
  );
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
  }
  receiveClick() {
    console.log("hello world");
  }
  render() {
    return (
      <div>
        <form>
          <Name value={this.state} />
          <Password value={this.state} />
          <Submit handleClick={this.receiveClick.bind(this)} />
        </form>
      </div>
    );
  }
}

export default Form;
