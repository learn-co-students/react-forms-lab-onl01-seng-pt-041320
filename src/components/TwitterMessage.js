import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    let remainingChar = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          name="message"
          id="message"
          value={this.state.message}
        />
        {remainingChar}
      </div>
    );
  }
}

export default TwitterMessage;
