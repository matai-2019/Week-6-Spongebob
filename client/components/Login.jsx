import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setName } from '../actions'

class Login extends Component {
  state={
    name: ''
  }

  handleInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(setName(this.state.name))
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter name" onChange={this.handleInput} value={this.state.name}/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login)
