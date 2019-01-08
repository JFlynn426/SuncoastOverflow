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

        <div className="Titles">
          <div className="VoteButton">
            <button>Vote</button>
          </div>
          <div className="Questions">
            <textarea id="story" name="story" rows="5" cols="33" />

            <div className="CreatedTimeAndAuthor">
              <div>Modified 2 minutes ago</div>
              <div>Author's name</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
