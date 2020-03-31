import React from 'react'
import { RegistrReduxForm } from './Registration'
import {authAPI} from '../../api/api'

class RegistrationPage extends React.Component {
  submit = formData => {
    authAPI.registration(formData.email, formData.password, formData.name)
  }
  render() {
    return <RegistrReduxForm onSubmit={this.submit} />
  }
}

export default RegistrationPage
