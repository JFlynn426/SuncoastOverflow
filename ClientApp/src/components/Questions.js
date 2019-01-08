import React, { Component } from 'react'

export class Questions extends Component {
  static displayName = Questions.name

  render() {
    return (
      <div>
        <div className="Header">
          <textarea
            id="story"
            name="story"
            rows="2"
            cols="40"
            placeholder="Title"
          />
          <button>Ask Question</button>
        </div>

        <div className="Titles">
          <div className="Questions">
            <textarea
              id="story"
              name="story"
              rows="10"
              cols="40"
              placeholder="Body"
            />

            <div class="CreatedTimeAndAuthor">
              <div>Modified 2 minutes ago</div>
              <input type="text" placeholder="Author" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
