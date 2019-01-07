import React, { Component } from 'react'

export class Questions extends Component {
  static displayName = Questions.name

  render() {
    return (
      <div>
        <div className="Header">
          <h1>Question Title 1</h1>
          <button>Ask Question</button>
        </div>
      </div>
    )
  }
}

export default Questions
