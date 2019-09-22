import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LITERALS from 'commons/constants/literals'
import styles from './header.css'

class Header extends Component {
  render() {
    return (
      <header className={ styles.container }>
        <div className={ styles.text }>
          { LITERALS.TITLE}
        </div>
        <ul className={ styles.linksContainer }>
          <li className={ styles.link }>
            <NavLink
              activeClassName={ styles.active }
              exact={ true }
              to="/"
            >
              { LITERALS.LINK1 }
            </NavLink>
          </li>
          <li className={ styles.link }>
            <NavLink
              activeClassName={ styles.active }
              exact={ true }
              to="/form"
            >
              { LITERALS.LINK2 }
            </NavLink>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
