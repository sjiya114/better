import React from 'react'

function Opinions() {
  return (
    <div className="px-[10vw] flex flex-col justify-center items-center pt-20 pb-20 space-y-10">
        <h1 className="text-3xl font-bold">Expert Opinions</h1>
        <div  className="flex flex-row flex-wrap rounded-2xl space-x-6 ">
            <div className='flex flex-col w-[320px] h-[310px] max-md:w-full max-md:h-fit px-6 py-6 bg-[#F0F7F1] space-y-4'>
               <p className='font-bold text-xl'>
                Should I wait for a better market?
               </p>
               <p className='text-sm text-gray-600'>
                  If you are buying a home,focus on who worksfor your budget and lifestyle right now instead of waiting for perfect market.There are program...
               </p>
               <div  className='flex flex-row space-x-4'>
                  <img className='rounded-full w-10 h-10' src="https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2Fe94ec6ef07b742ce9fcd987420e494e7" alt="" />
                  <div className='flex flex-col space-y-1'>
                    <p>River Robertson</p>
                    <p className='text-gray-600'>Loan Consultant</p>
                    <p className='text-gray-600'>NLMS #1698258</p>
                  </div>
               </div>
            </div>
            <div className='flex flex-col  w-[320px] h-[310px] max-md:w-full max-md:h-fit bg-[#F0F7F1] px-6 py-6 rounded-2xl space-y-4'>
                 <p className='text-xl font-bold'>
                Is it true rates will drop
               </p>
               <p className='text-gray-600 text-sm'>
                We have been hearing that for 3+ years,and many buyers have missed out their own homes waiting for that magca moments nobody has...
               </p>
               <div className='flex flex-row space-x-4'   >
                  <img  className='rounded-full w-10 h-10' src="https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2Fe84f32b50c564f6b8d2fe9fb9aa01d6a" alt="" />
                  <div className='flex flex-col space-y-2'>
                    <p >David Schultz</p>
                    <p className='text-gray-600'>Loan Consultant</p>
                    <p className='text-gray-600'>NLMS #1952787</p>
                  </div>
               </div>
            </div>
            <div className='flex flex-col  w-[320px] h-[310px] max-md:w-full max-md:h-fit px-6 py-6 bg-[#F0F7F1] rounded-2xl space-y-4'>
                <p className='text-xl font-bold'>
                 How should buyers handlescary market headlines?
               </p>
               <p className='text-gray-600 text-sm'>
                 Often the media headline are inaccurate and sensationalized.
                Connect with a licensed loan officer  who can help you sort through noise and give...
               </p>
               <div  className='flex flex-row space-x-4'> 
                 <img  className='rounded-full w-10 h-10' src="https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2F5a3a349acdc640158bed98c296d8dfa5" alt="" />
                  <div className='flex flex-col space-y-2'>
                    <p>Libby Owens</p>
                    <p className='text-gray-600'>Senior Loan Consultant</p>
                    <p className='text-gray-600'>NLMS #1952787</p>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Opinions
