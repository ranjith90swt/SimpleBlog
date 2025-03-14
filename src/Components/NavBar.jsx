import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";

const NavBar = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navLists = [
    {name:'Home', link:"/" }, 
    {name: "About Us", link:"/about"},
    {name: "Projects", dropdown: [{name: "Web Development", link: "/about"}, {name:"Ux Development", link: "#"}],},
    {name: "Services", dropdown: [{name: "Customer Support", link: "#"}, {name:"Team Support", link: "#"}],},
    {name: "Contact Us", link:"/contactus"},
  ]

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () =>{
    setMenuOpen(false);
    setOpenDropdown(null);
  }
  const closeDropdown = () => {
    setOpenDropdown(false)
  }

  
  return (
    <>
       <header className="bg-white py-3 lg:py-4 border-b border-b-stone-100">
            <nav className="container items-center mx-auto flex justify-between px-4">
               <a href="" className=' text-xl lg:text-3xl'>Logo </a>

               <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden '> <LuMenu /> </button> 
               <ul className="items-center hidden md:flex gap-8">
                {
                  navLists.map((list, index) => (
                    <li className="relative" key={index}> 
                     {list.dropdown ? (
                       <button onClick={() => toggleDropdown(list.name)} className='navlink'>{list.name}  <span>+</span></button>
                     ):(
                      <NavLink to={list.link} className="navlink">
                      {list.name}
                      </NavLink>
                     )
                     }
                     {list.dropdown && openDropdown === list.name && (
                      <ul className="absolute left-0 mt-4 w-100 bg-white z-10 shadow-md border border-gray-200 rounded">
                        {list.dropdown.map((item, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={item.link}
                              className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    </li>
                  ))
                }
                
               </ul>
               <div className="px-2 md:flex hidden">
                 <a href="" className='main-btn'>Book Now</a>
               </div>
            </nav>

            {
              menuOpen && (
                <div className="md:hidden">
                     <ul className="flex flex-col gap-3 mb-2 px-3 mt-4">
                        {navLists.map((list, index) => (
                          <li key={index} className="relative w-full">
                            {list.dropdown ? (
                              <>
                                <a
                                  onClick={() => toggleDropdown(list.name)}
                                  className="navlink "
                                >
                                  {list.name} <span className="ml-1">▼</span>
                                </a>
                                {openDropdown === list.name && (
                                  <ul className="w-full bg-gray-100 mt-2">
                                    {list.dropdown.map((item, subIndex) => (
                                      <li key={subIndex}>
                                        <NavLink onClick={closeMenu}
                                          to={item.link}
                                          className="block px-4 py-2 hover:bg-gray-200"
                                        >
                                          {item.name}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <NavLink onClick={closeMenu} to={list.link} className="navlink block w-full">
                                {list.name}
                              </NavLink>
                            )}
                          </li>
                        ))}
                        <div className=" mt-3">
                          <a href="/" className="main-btn">
                            Book Now
                          </a>
                        </div>
                      </ul>              
                </div>
              )
            }
       </header>
        
    </>
  )
}

export default NavBar