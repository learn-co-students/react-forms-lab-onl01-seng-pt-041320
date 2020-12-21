import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message}
        onChange={this.handleMessageChange}
        />
        <br></br>
        Maximum Charcter Length: {this.props.maxChars}
        <br></br>
        Characters Remaining: {this.props.maxChars - this.state.message.length }
      </div>
    );
  }
}

export default TwitterMessage;
