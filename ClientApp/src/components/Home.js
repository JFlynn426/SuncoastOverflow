import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

export class Home extends Component {
  static displayName = Home.name

  constructor(props) {
    super(props)
    this.state = {
      allQuestions: []
    }
  }
  componentDidMount() {
    this.loadAllQuestions()
  }

  loadAllQuestions = () => {
    axios.get('https://localhost:5001/api/questions').then(resp => {
      this.setState({
        allQuestions: resp.data
      })
    })
  }

  render() {
    return (
      <Route>
        <div>
          <div className="Header">
            <h1>Top Questions</h1>
            <Link to="/questions">
              <button type="button">Ask Questions</button>
            </Link>
          </div>

          <div className="Titles">
            <div className="VoteButton">
              <button className="VoteButton">Vote Up</button>
              <button className="VoteButton">Vote Down</button>
              <div>Votes Counter</div>
            </div>
            <div className="Questions">
              <h2>
                {this.state.allQuestions.map(question => {
                  return <div>{question.questionTitle}</div>
                })}
              </h2>
              <div className="CreatedTimeAndAuthor">
                <div>Modified 2 minutes ago</div>
                <div>Author's name</div>
              </div>
            </div>
          </div>

          <div className="Titles">
            <div className="VoteButton">
              <button className="VoteButton">Vote Up</button>
              <button className="VoteButton">Vote Down</button>
              <div>Votes Counter</div>
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
              <button className="VoteButton">Vote Up</button>
              <button className="VoteButton">Vote Down</button>
              <div>Votes Counter</div>
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
              <button className="VoteButton">Vote Up</button>
              <button className="VoteButton">Vote Down</button>
              <div>Votes Counter</div>
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
      </Route>
    )
  }
}
export default Home
