import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleOnChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ e => this.handleOnChange(e)} value={this.state.message} />
      <div>
        <strong>Remaining characters:</strong>
        { this.remainingCharacters()}
      </div>
      </div>
    );
  }
}

export default TwitterMessage;
