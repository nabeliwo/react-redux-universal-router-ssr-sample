import React from 'react'
import { connect } from 'react-redux'
import { push as pushAction, replace as replaceAction } from '../actions/history'

class Link extends React.PureComponent {
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(e) {
    e.preventDefault()

    const { replace, dispatch, to } = this.props

    if (replace) {
      dispatch(replaceAction(to))
    } else {
      dispatch(pushAction(to))
    }
  }

  render() {
    return (
      <a href="" onClick={this._handleClick}>
        {this.props.children}
      </a>
    )
  }
}

export default connect()(Link)
