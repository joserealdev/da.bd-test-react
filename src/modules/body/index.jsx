import React, { Component } from 'react'
import styles from './body.css'
import Table from 'components/table'

class Body extends Component {

  render() {

    const fieldsToShow = ['id', 'name', 'username', 'website']

    return(
      <div className={ styles.mainBodyWrapper }>
        <Table
          showFields={ fieldsToShow }
        />
      </div>
    )
  }
}

export default Body