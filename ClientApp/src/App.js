import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import './components/Style.css'
import Questions from './components/Questions'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/fetch-data" component={FetchData} />
      </Layout>
    )
  }
}
