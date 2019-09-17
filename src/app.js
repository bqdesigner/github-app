'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  // Criando os estados da aplicação
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  // Criando função para padronizar a request na mesma URL, já com verificações caso alguns dados nãos sejam passados, como o nome do usuário e o tipo de acesso, como repos ou starred
  getGithubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  } 

  handleSearch(e) {
    // Pega o valor informado no search
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    // const target = e.target

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      // target.disabled = true
      ajax().get(this.getGithubApiUrl(value))
      .then((result) => {
        // console.log(result)
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      // .always(() => {
      //   target.disabled = false
      // })
      .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      // console.log('type', type)
      const username = this.state.userinfo.login
      ajax().get(this.getGithubApiUrl(username, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render() {
    return <AppContent
      // userinfo={this.state.userinfo}
      // repos={this.state.repos}
      // starred={this.state.starred}
      // isFetching={this.state.isFetching}
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
