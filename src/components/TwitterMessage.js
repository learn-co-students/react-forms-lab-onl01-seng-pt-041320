import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = 
    {
      message: ""
    };
  }

  handleOnChange = (event) =>
  {
    this.setState(
      {
        message: event.target.value
      }
    );
  }

  render() {
    let remainingCharacters = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleOnChange} value={this.state.message} />
        {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
