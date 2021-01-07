import React from "react";

class LoginForm extends React.Component {
  constructor() {
  super();

  this.state = {
    username: '',
    password: ''
  }
  }
  
  handleChange = event => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      let formData = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.handleLogin(formData)
    }
    
    
  }
  

  render() {
    return (
      <form onSubmit= {event => this.handleOnSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.handleChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.handleChange} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
