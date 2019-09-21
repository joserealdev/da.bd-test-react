import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'store/actions/table'
import styles from './table.css'

class Table extends Component {
  componentDidMount() {
    const { onInitUserInfo } = this.props
    onInitUserInfo()
  }

  render() {
    const { showFields, tableInfo, error } = this.props

    const headColumns = showFields.map((field) => (
      <th key={ field }>
        { field }
      </th>
    ))

    const userstag = tableInfo ? tableInfo.map((user) => {
      const userinfo = showFields.map((field) => (
        <td key={ field }>
          { user[field] }
        </td>
      ))

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
    ) : 'Loading'

    const errorText = error ? 'Error loading information' : null

    return (
      <div className={ styles.mainTableWrapper }>
        { errorText }
        { tableTag }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tableInfo: state.table.tableInfo,
  error: state.table.error
})

const mapDispatchToProps = (dispatch) => ({
  onInitUserInfo: () => dispatch(actions.initUserInfo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
