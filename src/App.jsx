import React, { Component } from 'react'
import styles from './App.css'
import Header from './modules/Header'
import Body from './modules/Body'

class App extends Component {
  render() {
    return (
      <div className={ styles.wrapper }>
        <div className={ styles.mainContainer }>
          <Header />
          <Body />
        </div>
      </div>
    )
  }
}

export default App
