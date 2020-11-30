import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <nav>
      <ul className='hover:text-red-900'>
        <li>
          <NavLink activeClassName='is-active' to='/newproduct'>
            New Product
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/categories'>
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default SideNavBar
