import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'

const Header = props => {
  // Here you can define your PropTypes.
  const { title = 'Welcome to React', url = 'http://localhost:3000' ,height="30vh" } = props

  const imgStyle = {
   height : '60px'
  };

  return (
    <header height={height} className='App-header'>
      <a href={url}>
        <img src={logo}   className='App-logo' alt='logo' />
      </a>
      <h1 className='App-title'>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}

export default Header
