import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink to='/registration'>
      <button>Registration</button>
      </NavLink>
      <NavLink to='/login'>
      <button>Login</button>
      </NavLink>
      <NavLink to='/profile'>
      <button>Profile</button>
      </NavLink>
      <NavLink to='/product'>
      <button>Product Edit</button>
      </NavLink>
      <NavLink to='/'>
      <button>Home</button>
      </NavLink>
      <h3>Personal ads</h3>
    </div>
  )
}

export default Header;