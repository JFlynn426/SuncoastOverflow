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
            <p>
              Lorem Ipsum Questions: I find demos on how to debug .net core apps
              in Visual Studio everywhere but not for Angular and VS Code. The
              only thing I see out there is how to deploy an Angular app using
              VS Code, Docker, Kubernetes, etc. Nothing for debugging in VS
              Code. Is this possible? If so, can someone direct me on how to
              configure VS Code to allow me to do this?
            </p>

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
