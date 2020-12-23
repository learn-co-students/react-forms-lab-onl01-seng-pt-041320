import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleOnChange = event => {
    this.setState({
      message: event.target.value 
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleOnChange} value={this.state.message}
        type="text" name="message" id="message" />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
