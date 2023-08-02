import React , {useState , useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import {LuPlane} from 'react-icons/lu';
import {RxHamburgerMenu} from 'react-icons/rx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
const navigate = useNavigate();

useEffect(() => {
  AOS.init();
}, []);


const handleClick= ()=>{
  navigate("/");
}

const [open , setOpen]= useState(false);
const handleClick1 = ()=>{
setOpen(!open);
}

  return (
    <div className='flex justify-between w-full overflow-hidden  bg-yellow-400 py-3 px-10 text-white font-mono shadow-3xl'>
        
        <div className='w-[50%] pt-3 text-[25px] flex' data-aos="fade-left">
          <span className='pt-1 text-[30px] text-red-600'><LuPlane/></span>
           <h1 className='pl-2'>Karishma Airlines</h1>
        </div>

        <div className={open ? 'w-[50%] md:inline pl-10' : 'w-[50%] md:inline hidden'}>
           <ul className='md:flex md:flex-row flex flex-col justify-evenly md:pt-0 pt-16'>
            <li className='md:text-[16px] text-[12px]' data-aos="flip-up">Home</li>
            <li className='md:text-[16px] text-[12px]' data-aos="flip-up">Book Ticktes</li>
            <li className='md:text-[16px] text-[12px]' data-aos="flip-up">Contact Us</li>
           </ul>
        </div>

        <div className={open ? 'inline md:hidden pt-3 text-[20px] md:pl-10 pr-10' : 'inline md:hidden pt-3 text-[20px] '} onClick={handleClick1}>
          <RxHamburgerMenu/>
        </div>


        <div className='pt-1' data-aos="fade-right">
        <button className='bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600' onClick={handleClick}>
               Logout
            </button>
        </div>
    
    </div>
  )
}

export default NavBar