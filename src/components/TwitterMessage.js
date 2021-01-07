import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      words: ""
    };
  }

  handleChange = event => {
    this.setState({
      words: event.target.value
    })
  }

  render() {
    let letterNum = this.props.maxChars - this.state.words.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} 
        value={this.state.words}/>
        {letterNum}
      </div>
    );
  }
}

export default TwitterMessage;
