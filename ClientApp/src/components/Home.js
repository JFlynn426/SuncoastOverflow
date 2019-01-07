import React, { Component } from 'react'

export class Home extends Component {
  static displayName = Home.name

  render() {
    return (
      <div>
        <div className="Header">
          <h1>Top Questions</h1>
          <button>Ask Question</button>
        </div>

        <div className="Titles">
          <div className="VoteButton">
            <button>Vote</button>
          </div>
          <div className="Questions">
            <h2>Question Title 1</h2>

            <div className="CreatedTimeAndAuthor">
              <div>Modified 2 minutes ago</div>
              <div>Author's name</div>
            </div>
          </div>
        </div>
        <div className="Titles">
          <div className="VoteButton">
            <button>Vote</button>
          </div>
          <div className="Questions">
            <h2>Question Title 2</h2>

            <div className="CreatedTimeAndAuthor">
              <div>Modified 2 minutes ago</div>
              <div>Author's name</div>
            </div>
          </div>
        </div>
        <div className="Titles">
          <div className="VoteButton">
            <button>Vote</button>
          </div>
          <div className="Questions">
            <h2>Question Title 3</h2>

            <div className="CreatedTimeAndAuthor">
              <div>Modified 2 minutes ago</div>
              <div>Author's name</div>
            </div>
          </div>
        </div>
        <div className="Titles">
          <div className="VoteButton">
            <button>Vote</button>
          </div>
          <div className="Questions">
            <h2>Question Title 4</h2>

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
export default Home
