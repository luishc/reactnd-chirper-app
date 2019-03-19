import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialdata } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialdata())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)