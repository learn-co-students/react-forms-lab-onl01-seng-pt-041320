import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: 0,
      tweet: ""
    };
  }

  handleChange = event => {
    let chars = event.target.value.length
    let tweet = event.target.value
    this.setState({
      chars: chars,
      tweet: tweet
    })
  }

  remainingChars = () => {
    let remainder = this.props.maxChars - this.state.chars
    return <p>you have {remainder} characters left</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.tweet} type="text" name="message" id="message" onChange={this.handleChange}/>
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
