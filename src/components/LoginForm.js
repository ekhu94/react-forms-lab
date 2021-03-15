import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state;
    if (username.length !== 0 && password.length !== 0) {
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>
            Username
            <input 
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username" 
              name="username" 
              type="text" 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password" 
              name="password" 
              type="password" 
            />
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
