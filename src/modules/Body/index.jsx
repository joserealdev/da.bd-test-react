import React, { Component } from 'react'
// import { Route, Switch, withRouter, Redirect } from "react-router-dom"
import styles from './body.css'
import Table from './Table'

class Body extends Component {
  render() {
    const fieldsToShow = ['id', 'name', 'username', 'website']

    return (
      <div className={ styles.mainBodyWrapper }>
        <Table
          showFields={ fieldsToShow }
        />
      </div>
    )
  }
}

export default Body
