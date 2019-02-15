import React, {Component} from 'react'
import './hamburger.scss'

class Hamburger extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      open: false,
    }
  }
  clickHandler = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    let toggleClass = this.state.open ? 'open' : ''
    return (
      <div onClick={this.clickHandler} className={'hamburger' + toggleClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Hamburger