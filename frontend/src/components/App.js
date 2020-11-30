import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header'
import Sidebar from './sidebar'
import Products from './Products'
import MainContent from '../components/main'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact>
          <Header />
          <div className='flex'>
            <Sidebar />
            <Products />
          </div>
        </Route>
        <Route path='/newproduct'>
          <Header />
          <div className='flex'>
            <Sidebar />
            <MainContent />
          </div>
        </Route>
      </BrowserRouter>
    </>
    // <div className='container max-auto'>
    //   <div class='flex justify-between items-center py-4 bg-blue-900'>
    //     <div class='flex-shrink-0 ml-10 cursor-pointer'>
    //       <i class='fas fa-drafting-compass fa-2x text-orange-500'></i>
    //       <span class='ml-1 text-3xl text-blue-200 font-semibold'>WebCraft</span>
    //     </div>
    //     <i class='fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer'></i>
    //     <ul class='hidden md:flex overflow-x-hidden mr-10 font-semibold'>
    //       <li class='mr-6 p-1 border-b-2 border-orange-500'>
    //         <a class='text-blue-200 cursor-default' href='/'>
    //           Home
    //         </a>
    //       </li>
    //       <li class='mr-6 p-1'>
    //         <a class='text-white hover:text-blue-300' href='/'>
    //           Services
    //         </a>
    //       </li>
    //       <li class='mr-6 p-1'>
    //         <a class='text-white hover:text-blue-300' href='/'>
    //           Projects
    //         </a>
    //       </li>
    //       <li class='mr-6 p-1'>
    //         <a class='text-white hover:text-blue-300' href='/'>
    //           Team
    //         </a>
    //       </li>
    //       <li class='mr-6 p-1'>
    //         <a class='text-white hover:text-blue-300' href='/'>
    //           About
    //         </a>
    //       </li>
    //       <li class='mr-6 p-1'>
    //         <a class='text-white hover:text-blue-300' href='/'>
    //           Contacts
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  )
}
export default App
