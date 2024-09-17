'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoMdCart } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import Dropdown from '@/app/dropdown'
import Face5Icon from '@mui/icons-material/Face5'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const quantity = useSelector((state: any) => state.AllCart.cart.length)
  console.log('quantity', quantity)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken') // Example: token stored in localStorage
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    // Perform logout logic, like removing token
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
  }

  return (
    <div>
      <header className='flex justify-between items-center py-6 px-8 shadow-md bg-white'>
        <Link
          href='/'
          className='text-4xl font-bold text-textcolor   tracking-wide'
        >
          Welcome
        </Link>
        <ul className='hidden sm:flex space-x-12'>
          <li>
            <Dropdown />
          </li>
          <li>
            <Link
              href='/'
              className='hover:text-orange font-bold text-textcolor text-[14px] tracking-wide'
            >
              Home
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className='hover:text-orange font-bold text-textcolor text-[14px] tracking-wide'
              >
                Login
              </button>
            ) : (
              <Link
                href='/login'
                className='hover:text-orange font-bold text-textcolor text-[14px] tracking-wide'
              >
                <Face5Icon />
              </Link>
            )}
          </li>
          <li className='relative'>
            <Link href='/cart' className='text-2xl hover:text-orange'>
              <IoMdCart />
              {quantity > 0 && (
                <span className='absolute -top-3 -right-3 bg-orange text-white font-bold px-2 py-1 text-xs rounded-full'>
                  {quantity}
                </span>
              )}
            </Link>
          </li>
        </ul>
        <div className='sm:hidden text-3xl cursor-pointer' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </div>
      </header>
      {isMenuOpen && (
        <div className='sm:hidden bg-gray-100 text-center p-4'>
          <ul className='space-y-4'>
            <li>
              <Link
                href='/'
                className='font-bold tracking-tight hover:tracking-wide'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/login'
                className='hover:text-red-500 text-base font-bold'
              >
                Login
              </Link>
            </li>
            <li className='relative'>
              <Link href='/cart' className='text-2xl hover:text-gray-500'>
                <IoMdCart />
                {quantity > 0 && (
                  <span className='absolute -top-3 -right-3 bg-gray-500 text-white font-bold px-2 py-1 text-xs rounded-full'>
                    {quantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
