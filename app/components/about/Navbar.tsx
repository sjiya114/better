"use client"
import {Phone, PhoneCall,Menu,X}  from 'lucide-react';
import { useState } from 'react';
// 
function Navbar(){
  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div className={`flex flex-row text-gray-800 bg-white px-10 max-md:px-0 py-6 text-lg justify-between max-md:justify-around  fixed left-0 top-0 right-0`}>
       <div className='font-normal space-x-10 max-md:space-x-10 flex flex-row justify-between '>
         <p className='font-bold text-black text-xl '>Better</p>
         <Menu className='md:hidden' onClick={()=>{setIsOpen(!isOpen)}}  />
         <div className='space-x-10 max-md:hidden flex flex-row'>
            <p>Buy</p>
         <p>Refinance</p>
         <p>HELOC</p>
         <p>Rates</p>
         <p>Better+</p>
         </div>
         
       </div>
       <div className='flex max-md:hidden flex-row space-x-10 justify-between'>
        <Phone className='border-[1px] border-black rounded-full px-2 py-2 w-10 h-10' color='black'/>
        <p>Sign in</p>
       </div>
    </div>
    {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex px-4 flex-col space-y-4 pb-4">
            <div className='flex flex-row space-x-10 justify-between'>
        <Phone className='border-[1px] border-black rounded-full px-2 py-2 w-10 h-10' color='black'/>
        <p>Sign in</p>
       </div>
            <p>Buy</p>
            <p>Refinance</p>
            <p>HELOC</p>
            <p>Rates</p>
            <p>Better+</p>
            <div className="flex items-center space-x-4">
              <Phone className="border-[1px] border-black rounded-full p-2 w-10 h-10" color="black" />
              <p>Sign in</p>
            </div>
          </div>
        )}
    </>
  )
}

export default Navbar
