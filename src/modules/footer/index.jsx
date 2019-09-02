import React, { Component } from 'react'
import styles from './footer.css'

class Footer extends Component {
  render() {
    return(
      <footer className={ styles.container }>
        <div className={ styles.info }>
          { 'Footer' }
        </div>
      </footer>
    )
  }
}

export default Footer