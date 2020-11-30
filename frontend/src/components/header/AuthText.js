import React from 'react'

const AuthText = (props) => {
  return (
    <div className='text-white flex items-center justify-center text-no'>
      <div className='mr-4 text-xs cursor-pointer capitalize'>{props.login}</div>
    </div>
  )
}
export default AuthText
