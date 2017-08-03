import React from "react";
import createServices from "../../services";

const initialState = { username: "", password: "" };

class view extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onClick = this.onClick.bind(this);
    this.services = createServices();
    // this.services = this.services.bind(this);
  }
  onChangeUsername(eventsArgs) {
    const username = eventsArgs.target.value;

    this.setState(prevState => {
      return Object.assign({}, prevState, { username });
    });
  }

  onChangePassword(eventsArgs) {
    const password = eventsArgs.target.value;

    this.setState(prevState => {
      return Object.assign({}, prevState, { password });
    });
  }

  onClick(eventArgs) {
    const username = this.state.username;
    const password = this.state.password;
    // eventArgs.preventDefault();

    this.services.user.register(username, password);
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="emailInput">
            Email
            <input
              id="emailInput"
              onChange={this.onChangeUsername}
              value={this.state.username}
            />
          </label>
          <label htmlFor="passwordInput">
            Password
            <input
              type="password"
              id="passwordInput"
              onChange={this.onChangePassword}
              value={this.state.password}
            />
          </label>
          <button onClick={this.onClick}>Login</button>
        </form>
      </div>
    );
  }
}
export default { view };
