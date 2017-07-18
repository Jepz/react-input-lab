import React from "react";

const initialState = { value: "hello world" };

class view extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.onChange = this.onChange.bind(this); // pratar mer om detta sen =)
  }
  onChange(eventsArgs) {
    const value = eventsArgs.target.value;

    this.setState({ value });
  }
  render() {
    return (
      <div>
        TODO: komplett registreringsformulär med email och lösen samt register,
        töm bort all boilerplate som inte behövs så att det inte finns
        exempelkod i react appen eller i storybooken button<form>
          <label htmlFor="nameInput">
            First- and Lastname
            <input
              type="text"
              id="nameInput"
              value={this.state.value}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="secondInput">
            Email
            <input
              type="text"
              id="secondInput"
              value={this.state.value}
              onChange={this.onChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default { view };
