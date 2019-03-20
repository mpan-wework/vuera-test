import React from 'react'

export class RouteLeft extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    console.log('componentDidMount in RouteLeft')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate in RouteLeft')
  }

  render () {
    return (
      <div>RouteLeft in react</div>
    )
  }
}
