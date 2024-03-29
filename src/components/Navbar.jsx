import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Sahuflogo.png'
import { BrowserRouter } from 'react-router-dom';
import{HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  const [nav , setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <img src ={Logo} alt="logo image" style={{width:'150px'}} />
    </div>  
     {/* menu*/}
    <div>
    <ul className=' hidden md:flex'>
      <BrowserRouter>
  
      <li><Link to='#home'>Home</Link></li>
      <li><Link to='#about'>About</Link></li>
      <li><Link to='#skills'>Skills</Link></li>
      <li><Link to='#work'>Work</Link></li>
      <li><Link to='#contact'>Contact</Link></li>
      </BrowserRouter>
      </ul>
    
    </div>
    {/* Hamburger*/}
    <div onClick={handleClick} className=' md:hidden z-10'>
      {!nav ? <FaBars/> :<FaTimes/> }
    </div>
     {/* mobile menu*/}
    <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center'}>
        <BrowserRouter>
        <li className='py-6 text-4xl'><Link to='#home'>Home</Link></li>
        <li className='py-6 text-4xl'><Link to='#about'>About</Link></li>
        <li className='py-6 text-4xl'><Link to='#skills'>Skills</Link></li>
        <li className='py-6 text-4xl'><Link to='#work'>Work</Link></li>
        <li className='py-6 text-4xl'><Link to='#contact'>Contact</Link></li>
        </BrowserRouter>
      </ul>
       {/* social icon*/}  
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' 
          href='https://www.linkedin.com/in/mohammad-sahuf-shaikh/'>
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' 
          href='https://github.com/sahuf2003'>
            Github <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a className='flex justify-between items-center w-full text-gray-300' 
          href='#contact'>
            Mail <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href=''>
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
      </ul>
      </div>
    </div>
  )
}

 export default Navbar 