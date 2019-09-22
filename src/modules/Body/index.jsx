import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import styles from './body.css'
import Table from './Table'
import Form from './Form'

class Body extends Component {
  render() {
    const fieldsToShow = ['id', 'name', 'username', 'website']

    return (
      <div className={ styles.mainBodyWrapper }>
        <Switch>
          <Route
            path="/form"
            component={ Form }
          />
          <Route
            exact={ true }
            path="/"
            render={ () => <Table showFields={ fieldsToShow } /> }
          />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default Body
