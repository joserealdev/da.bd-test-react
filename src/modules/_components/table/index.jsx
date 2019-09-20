import React, { Component } from 'react'
import styles from './table.css'
import { connect } from "react-redux";
import * as actions from "store/actions/table";

class Table extends Component {

  componentDidMount() {
    this.props.onInitUserInfo();
  }

  render() {

    const { showFields } = this.props

    const headColumns = showFields.map((field, i) => {
      return (
        <th key={ i }>
          { field }
        </th>
      )
    })

    const userstag = this.props.tableInfo ? this.props.tableInfo.map(user => {
      const userinfo = showFields.map((field, i) => {
        return (
          <td key={ i }>
            { user[field] }
          </td>
        )
      })
      return (
        <tr key={ user.id }>
          { userinfo }
        </tr>
      )
    }) : null

    const tableTag = userstag ? (
      <table>
        <thead>
          <tr>
            { headColumns }
          </tr>
        </thead>
        <tbody>
          { userstag }
        </tbody>
      </table>
    ) : this.props.error ? 'Error loading information' : 'Loading'

    return(
      <div className={ styles.mainTableWrapper }>
        { tableTag }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tableInfo: state.table.tableInfo,
    error: state.table.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitUserInfo: () => dispatch(actions.initUserInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);