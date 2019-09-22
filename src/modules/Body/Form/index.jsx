import React, { Component } from 'react'
import styles from './form.css'
import formConfig from './config.json'

class Form extends Component {
  handleInputChange = (event) => {
    const { target } = event
    const {
      type,
      value,
      checked,
      name
    } = target
    const finalValue = type === 'checkbox' ? checked : value

    this.setState({
      [name]: finalValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('The form was submitted')
  }

  render() {
    const formContent = formConfig.map((input) => (
      <div
        key={ input.id }
        className={ styles.item }
      >
        <label htmlFor={ input.id }>
          { input.labelText }
        </label>
        <input
          id={ input.id }
          name={ input.id }
          onChange={ this.handleInputChange }
          type={ input.type }
          value={ input.value }
        />
      </div>
    ))
    return (
      <div className={ styles.container }>
        <form onSubmit={ this.handleSubmit }>
          { formContent }
        </form>
      </div>
    )
  }
}

export default Form
