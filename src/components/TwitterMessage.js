import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let totalCharacters = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e=> this.handleChange(e)} value={this.state.message}/>
        {totalCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
