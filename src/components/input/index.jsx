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
        TODO: komplett registreringsformulär med email och lösen samt register
        button<form>
          <label htmlFor="firstInput">
            First input
            <input type="text" id="firstInput" />
          </label>
          <label htmlFor="secondInput">
            Second input
            <input type="text" id="secondInput" />
          </label>
        </form>
      </div>
    );
  }
}
export default { view };
