import React from 'react'
import SideNavBar from './SideNavBar'
import './index.scss'

const Sidebar = () => {
  return (
    <div className='side-nav flex p-2 bg-gray-300 overflow.hidden z-10 text-xs'>
      <SideNavBar />
    </div>
  )
}

export default Sidebar
