import React from 'react'
import { ProductReduxForm } from './Product'
import { ProductApi } from '../../api/api'

class ProductPage extends React.Component {
  submit = formData => {
    ProductApi.setProduct(formData.title, formData.group, formData.price, formData.description, formData.img)
  }
  render() {
    return <ProductReduxForm onSubmit={this.submit} />
  }
}

export default ProductPage