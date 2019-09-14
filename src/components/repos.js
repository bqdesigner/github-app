'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2> {title} </h2>
        <ul>
            {repos.map((repo, index) => (
                <li key={index}> 
                    <a href={repo.link}> {repo.name} </a> 
                </li>
            ))}
        </ul>
    </div>
)

// Valores default
Repos.defaultProps = {
    className: '',
}

// Passando os tipos de valores que as props são
Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos
