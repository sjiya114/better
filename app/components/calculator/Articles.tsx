"use client"
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Mousewheel} from 'swiper/modules'
import { MoveRight } from 'lucide-react';
import "swiper/css";
import "swiper/css/pagination"
function Articles() {
  const articleData=[
  {
    "name": "What is an escalation clause, and how does it work?",
    "description": "Learn how an escalation clause can help strengthen your offer, help you win bidding wars, and decide if it's the..."
  },
  {
    "name": "Your mortgage price: the determining factors",
    "description": "There’s no secret sauce to setting your mortgage price, just these key variables."
  },
  {
    "name": "How first-time homebuyers put down roots without giving up their travel goals",
    "description": "Here’s how you can put down roots and buy a house without having to give up your dreams of traveling the world."
  },
  {
    "name": "How much does it cost to refinance your mortgage?",
    "description": "Wondering “How much does it cost to refinance?” Here’s your guide to the short- and long-term costs of..."
  },
  {
    "name": "What percentage of income should go to a mortgage?",
    "description": "Learn what percentage of your income should go to your mortgage. Get expert tips to manage your monthly..."
  },
  {
    "name": "Why 2020 was the year of the home",
    "description": "Mortgage News: 2020 changed the homeownership game, and its effects are still being felt as we head into the..."
  },
  {
    "name": "Appraisal contingency: Add it or waive it?",
    "description": "An appraisal contingency helps prevent homebuyers from overpaying, but sometimes they cause offers to be..."
  },
  {
    "name": "A quick guide to your Loan Estimate",
    "description": "Your loan estimate is a summary of the terms and costs associated with your loan. Learn how to read and..."
  },
  {
    "name": "What inflation means for refinance rates",
    "description": "Mortgage News: Rates are likely to inch upward between now and the end of the year. Find out how inflation is..."
  }
]

  return (
    <div className="px-[10vw] flex flex-col justify-center items-center pt-20 pb-20 space-y-10 bg-[#F0F7F1]">
       <h1 className="text-3xl font-bold">Related Articles</h1>
        <Swiper className='w-full' mousewheel={true} pagination={{type:'custom'}}  breakpoints={{
        0: { slidesPerView: 1 }, 
        450:{slidesPerView:2},
        768: { slidesPerView: 2 }, 
        1260:{slidesPerView:3}
      }}   spaceBetween={20} modules={[Pagination,Mousewheel]} >
         {articleData.map((d,index)=>(
             <SwiperSlide key={index}>
        <div className='flex flex-col justify-around px-4 py-2 w-[240px] max-sm:h-fit  max-md:w-full h-[240px] max-md:py-6  max-md:h-[200px]  border-2 border-[#C7C9C5] rounded-2xl'>
      <h1 className='font-semibold text-[#565D5A]'>{d.name}</h1>
      <p className='text-[#8C938F]'>{d.description}</p>
       <div className='flex flex-row space-x-2'>
         <span className='text-[#017848]'>Read now</span>
         <MoveRight className='text-[#017848]' />
       </div>
    </div>
    </SwiperSlide>
    ))}
      </Swiper>  
       <button className="bg-[#017848]  text-white font-semibold px-6 py-4 rounded-2xl">Visit our learning center</button>
    </div>
  )
}

export default Articles
