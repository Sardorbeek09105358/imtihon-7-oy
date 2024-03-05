import React from 'react'
import Navbar from './Navbar'
import bottom from "../images/bottom.png"
import image from "../images/header-bg.png"
import About from './About'
import Footer from './Footer'
import "./Home.css"
const Home = () => {

  return (
    <div>
      <div className='mb-[200px]'>
        <header className='w-full h-[100vh] bg-[#ED165F] pb-3'>
          <Navbar />
          <div className='flex justify-center h-[80%]'>
            <img src={image} alt="" className='mt-5 animate-fade-in' />
          </div>

          <div className='flex w-full justify-center gap-4'>
            <div className='w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-white border-[white]'></div>
            <div className='w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]'></div>
            <div className='w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]'></div>
            <div className='w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]'></div>
          </div>
          <div className='w-full flex flex-col items-center mt-3'>
            <h1 className='capitalize text-[20px] text-white font-normal'>explore our collection</h1>
            <img src={bottom} alt="" />
          </div>
        </header>
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default Home
