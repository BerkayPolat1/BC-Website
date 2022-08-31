import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import Dropdown from './Dropdown'
import Typewriter from 'typewriter-effect';


function Navbar() {

  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  

  return(
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu '}>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/Topics' className='nav-links' onClick={closeMobileMenu}>
              Topics <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/campus' className='nav-links' onClick={closeMobileMenu}>
              <Typewriter options={{strings: ['Campus'], autoStart: true, loop: true, }}
              />
                
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
              In the News
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/all' className='nav-links' onClick={closeMobileMenu}>
              All Stories
            </Link>
          </li>
      
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sing Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  )
}

export default Navbar;