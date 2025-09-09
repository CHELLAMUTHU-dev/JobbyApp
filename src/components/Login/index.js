import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    submitError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({submitError: true, errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <div className="input-container">
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          onChange={this.setUsername}
          value={username}
          placeholder="Username"
        />
      </div>
    )
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="input-container">
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          onChange={this.setPassword}
          value={password}
          placeholder="Password"
        />
      </div>
    )
  }

  render() {
    const {errMsg, submitError} = this.state

    return (
      <div className="login-bg">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form onSubmit={this.onSubmitForm} className="input-container">
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit">Login</button>
            {submitError && <p className="err-msg">{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
