import React from 'react'
import { LoginReduxForm } from './Login'
import { setUserAC } from '../../data/authReducer'

class LoginPage extends React.Component {
  submit = formData => {
    const user = {
      email: formData.email,
      password: formData.password
    }
    setUserAC(user)
  }
  render() {
    return <LoginReduxForm onSubmit={this.submit} />
  }
}

export default LoginPage
