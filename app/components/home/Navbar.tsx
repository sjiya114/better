import {Phone, PhoneCall}  from 'lucide-react';
// 
function Navbar(){
  return (
    <div className={`flex flex-row text-white bg-[#004733] px-10 py-6 text-lg justify-between fixed left-0 top-0 right-0`}>
       <div className='font-normal space-x-10 flex flex-row justify-between '>
         <p className='font-bold  text-xl '>Better</p>
         <p>Buy</p>
         <p>Refinance</p>
         <p>HELOC</p>
         <p>Rates</p>
         <p>Better+</p>
       </div>
       <div className='flex flex-row space-x-10 justify-between'>
        <Phone className='border-[1px] border-white rounded-full px-2 py-2 w-10 h-10' color='white'/>
        <p>Sign in</p>
       </div>
    </div>
  )
}

export default Navbar
