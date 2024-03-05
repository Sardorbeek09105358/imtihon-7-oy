import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/Logo-1.jpeg"
import "../Home/navbar.css"
import { useSearchContext } from './useSearch'
const Navbar = () => {
    const { inputVal, setInputVal } = useSearchContext();
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <div>
            <nav className='flex w-full justify-around h-[100px] items-center bg-[#F5F5F5] fixed z-10 mb-10 shadow-md'>
                <ul className='flex gap-6'>
                    <li><NavLink className="capitalize text-[20px]" to="/">Home</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/clothes">clothes</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/shoes">shoes</NavLink></li>
                    <li><NavLink className="capitalize text-[20px]" to="/accessories">accessories</NavLink></li>
                </ul>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='text-[22px] flex gap-5 items-center'>
                    <input type="search" placeholder='search...' onChange={handleChange} value={inputVal} className='border-bottom-2 border-black rounded outline-none pl-2 capitalize' />
                    <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
                    <NavLink to="/account"><i className="cursor-pointer fa-solid fa-user"></i></NavLink>
                    <NavLink to="/shopping"><i className="cursor-pointer fa-solid fa-cart-shopping"></i></NavLink>
                    <i className="cursor-pointer fa-solid fa-heart"></i>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

