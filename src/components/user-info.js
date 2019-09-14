'use strict'

import React from 'react'

const UserInfo = () => (
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
    </div>
)

export default UserInfo
