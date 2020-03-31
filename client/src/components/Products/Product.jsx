import React from 'react'
import classes from './Product.module.css'
import { Field, reduxForm } from 'redux-form'

const ProductForm = props => {
  const { handleSubmit } = props
  return (
    <div className={classes.content}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="group">Group</label>
        <Field name="group" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field name="price" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="img">Image</label>
        <Field name="img" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export const ProductReduxForm = reduxForm({ form: 'product' })(ProductForm)