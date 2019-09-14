'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  // Criando os estados da aplicação
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Bruno Queirós',
        photo: 'https://avatars3.githubusercontent.com/u/42852056?v=4',
        login: 'bqdesigner',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repositório',
        link: '#'
      }],
      starred: [{
        name: 'Repositório',
        link: '#'
      }]
    }
  }

  render() {
    return <AppContent 
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
