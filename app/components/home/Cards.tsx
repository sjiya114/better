"use client";
import {ArrowRight, Calculator, DatabaseZapIcon} from 'lucide-react'
import { useState } from 'react'
function Cards() {
   const Products={
        heading:"How AI mortage landing is transforming Home Loan Process",
        description:"",
        image:"https://media.better.com/better-com/homepage/learning-center/ai-mortgage.webp",
        heading1:"One Day Mortagage",
        description1:"Kick your home loan into hyperdrive.Going from locked rate to commitment lettertakes weeks for traditional lenders.We do it in a single day.Traditional lnders deliver a commitmeent letter in a few weeks.",
        image1:"https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
        heading2:"Better HELOC",
        description2:"Intorducing one day heloc -your express lane to getting cash from your homewith our home Equity line of credit .Access upto 90%of  our home equity as cash in as little as 7 days",
        image2:"https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
        heading3:"Insurance",
        description3:"",
        image3:"https://media.better.com/better-com/homepage/learning-center/insurance.webp"}
    const Calculators=
        {
        heading:"Mortgage Calculator",
        description:"",
        image:"https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
       
        heading1:"Affordability Calculator",
        description1:"Got home ownership dreams?Let's put some number behind them.Our affordability calculator estimates themaximum home you can afford",
        image1:"https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
       
        heading2:"HELPC Calculator",
        description2:"Need Cash?Quickly see how much equity you can borrow from your home and what your monthly payments ight be",
        image2:"https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
          heading3:"Fixed rate loan comparison calculator",
        description3:"",
        image3:"https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp"
        }

     const Guides=
         {
        heading:"What is a good-debt-to-income ration for home loan?",
        description:"",
        image:"https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
        heading1:"Buying a house withour realtor",
        description1:"Thinking about buying a house without a real estate agrent?Red it first.",
        image1:"https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
        heading2:"Timeline for home buying process",
        description2:"Does the process of buying a home seen daunting?Don't stress we broke it into 10 easy steps",
        image2:"https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
        heading3:"Conventional loan requirements",
        description3:"",
        image3:"https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp"}
   
       const [data,setData]=useState(Products);
  return (
    <>
    <div className='flex flex-col space-y-20 px-[8vw]'>
       <div className='flex flex-row justify-between '>
        <h1 className='text-black font-bold text-4xl'>Got questions?
We have got answers</h1>
     <div className="flex flex-row space-x-4">
           <button  onClick={()=>{setData(Products)}}  className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Our products</button>
        <button  onClick={()=>{setData(Calculators)}} className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Calculators</button>
        <button onClick={()=>{setData(Guides)}} className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Guides and FAQs</button>
       </div>
    </div>
    <div className='flex flex-row max-md:flex-col flex-wrap space-x-10 space-y-10 '>
       <div className='w-[36%] max-md:w-full rounded-lg px-6 py-6 bg-[#F0F7F1] flex flex-col space-y-4'>
        <div className='flex flex-col space-y-2'>
        <h1 className='font-semibold text-lg '>{ data.heading}</h1>
        <p></p>
        <ArrowRight className='w-10 h-10 px-1 py-1 border-[1px] rounded-full'/>
        </div>
        <img className='w-60 h-fit' src={data.image} alt="" />
       </div>
         <div className='w-[56%] rounded-lg px-6 py-6 bg-[#F0F7F1] flex flex-row max-md:flex-col max-md:w-full space-x-4'>
        <div className='flex flex-col space-y-2'>
        <h1  className='font-semibold'>{data.heading1 }</h1>
        <p>{data.description1}</p>
        <ArrowRight className='w-10 h-10 px-1 py-1 border-[1px] rounded-full'/>
        </div>
        <img className='h-60 w-60' src={data.image1} alt="" />
       </div>
        <div className='w-[56%] rounded-lg px-6 py-6 bg-[#F0F7F1] flex flex-row max-md:flex-col max-md:w-full  space-x-4'>
             <img  className='h-60 w-60' src={data.image2} alt="" />
        <div className='flex flex-col space-y-2'>
            
        <h1  className='font-semibold'>{data.heading2 }</h1>
        <p>{data.description2}</p>
        <ArrowRight className='w-10 h-10 px-1 py-1 border-[1px] rounded-full'/>
        </div>
       
       </div>
       <div className='w-[36%] rounded-lg px-6 py-6 bg-[#F0F7F1] space-y-4'>
        <div className='flex flex-col space-y-2'>
        <h1  className='font-semibold'>{data.heading3 }</h1>
        <p></p>
        <ArrowRight className='w-10 h-10 px-1 py-1 border-[1px] rounded-full'/>
        </div>
        <img className='w-60 h-fit' src={data.image3} alt="" />
       </div>
    </div>
    </div> 
     </>
  )
}

export default Cards
