import React from 'react'

export class RouteRight extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    console.log('componentDidMount in RouteRight')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate in RouteRight')
  }

  render () {
    return (
      <div>RouteRight in react</div>
    )
  }
}
