import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      characters: props.maxChars,
      message: ''
    };
  }

  handleChar = event => {
    this.setState({
      characters: this.state.maxChars - event.target.value.length,
      message: event.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChar(event)} value={this.state.message}/>
        <p>{this.state.characters} characters remaining</p>

      </div>
    );
  }

  
}

export default TwitterMessage;
