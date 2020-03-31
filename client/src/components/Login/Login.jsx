import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <div className={classes.content}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)