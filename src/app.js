'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input 
        type='search' 
        placeholder='Digite o nome de usuário Github'
      />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/42852056?v=4' />
      <h1> 
        <a href='https://github.com/bqdesigner'> Bruno Queirós </a> 
      </h1>
      <ul className='repos-info'>
        <li> Repositórios: 2 </li>
        <li> Seguidores: 10 </li>
        <li> Seguindo: 10 </li>
      </ul>

      <div className='actions'>
        <button> Ver repositórios </button>
        <button> Ver favoritos </button>
      </div>

      <div className='repos'>
        <h2> Repositórios </h2>
        <ul>
          <li> <a href='#'> Nome do repositório </a> </li>
        </ul>
      </div>

      <div className='starred'>
        <h2> Favoritos </h2>
        <ul>
          <li> <a href='#'> Nome do repositório </a> </li>
        </ul>
      </div>

    </div>
  </div>
)

export default App
