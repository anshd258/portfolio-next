"use client"
import { React, useState } from 'react'
import Link from 'next/link'
import NavLink from './navbarlink'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuBlock from './menublock';
const navLinks = [
  {
    link: "#about",
    title: "About"
  },
  {
    link: "#projects",
    title: "Project"
  },
  {
    link: "#contact",
    title: "Contact"
  },
]
function Navbar() {
  const [navbar, setnavbar] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10  backdrop-blur-md bg-black bg-opacity-80 py-3'>
      <div className='flex mx-auto px-5  items-center  flex-wrap  justify-between'>
        <Link href={"/"} className='text-white font-semibold  md:text-5xl text-2xl'> Anshd258</Link>
        <div className='mobile-menu  md:hidden block '>
          {
            navbar ?
              (<button onClick={() => setnavbar(false)} className='flex item-center px-3 py-2 rounded border border-slate-400  text-slate-400 hover:border-white hover:text-white'>
                <XMarkIcon className='h-5 w-5 ' />
              </button>) :
              (<button onClick={() => setnavbar(true)} className='flex item-center px-3 py-2 rounded border border-slate-400  text-slate-400 hover:border-white hover:text-white'>
                <Bars2Icon className='h-5 w-5 ' />

              </button>)
          }
        </div>
        <div className='menu hidden md:block md:w-auto ' id='navbar'>
          <ul className='flex md:flex-row md:space-x-5'>
            {navLinks.map((value, index) =>
            (<li key={index}>
              <NavLink link={value.link} title={value.title} />
            </li>)
            )}
          </ul>
        </div>
      </div>
      {navbar ? <MenuBlock links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar