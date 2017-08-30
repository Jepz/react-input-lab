import React from "react";

const initialState = { showField: false, showText: true };

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" />
          </label>
          <button>Check</button>
        </form>
      </div>
    );
  }
}

export default Form;
