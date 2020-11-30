import React from 'react'
import AuthText from './AuthText'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 bg-black font-sans'>
      <div className='flex-shrink-0 ml-3 cursor-pointer items-center'>
        <i className='fas fa-clinic-medical fa-1x text-blue-400'></i>
        <span className='ml-3 text-sm text-blue-400 font-normal'>Pharma</span>
      </div>
      <Searchbar />
      <AuthText login='login' />
    </header>
  )
}

export default Header
