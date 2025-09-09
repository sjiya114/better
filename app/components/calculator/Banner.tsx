// "use client"
// import {Swiper,SwiperSlide} from 'swiper/react'
// import {Pagination,Mousewheel} from 'swiper/modules'
// import { MoveRight } from 'lucide-react';
// import "swiper/css";
// import "swiper/css/pagination"
// function Banner() {
//     const data=[{date:"05/12/2025",name:"Better offered the best rate",
//         description:"Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better."},
//         {date:"03/16/2025",name:"Just got the keys to our new home!",
//             description:"I am very busy at work and don’t have a lot of time to mess around and these guys have simplified the process and made it much more efficient than other providers. We were approved in a matter of days. The Better team were very punctual and always on top of things. They also gave us better rates than anyone else we priced. We had a great experience working with them."}
//         ,{date:"02/15/2025",name:"Amazing experience",
//             description:"I went with Better because it literally saved me close to $7k from the other lender I was with. They finished my loan in 8 days total. Not business days, just 8 days. Thanks Better!"},
//         {date:"06/08/2025",name:"Excellent, fast and reliable mortgage",
//             description:"Love the fast processing and decision. Highly recommend!"},
//         {date:"05/28/2025",name:"Never had as positive an experience as I did with Better",description:"I’ve purchased a few homes over my lifetime and refinanced about four times as well. In all those experiences, I never had as positive an experience as I did with Better. The process was easy, the team was always available to answer questions, and they laid out everything I needed in a simple, step-by-step format. I loved my experience with them and highly recommend them."}
//     ]
//   return (
//     <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
//       {/* Left Panel */}
//       <div className="bg-[#9AD5AB] flex flex-col w-full h-fit justify-around space-y-6 p-6 basis-1/2 rounded-2xl">
//         <h1 className="text-2xl font-bold text-[#017848]">1400+ Customers</h1>
//         <p className="text-[#565D5A]">Rated 5 stars on Trustpilot</p>
//         <button className="bg-[#017848] text-white font-semibold px-6 py-4 rounded-2xl hover:bg-[#01603A] transition">
//           Tell us about your Experience
//         </button>
//       </div>

//       {/* Right Panel - Swiper */}
//       <div className="w-1/2">
//         <Swiper
//           className=""
//           mousewheel
//           pagination={{ clickable: true }}
//           slidesPerView={1}
//           spaceBetween={20}
//           modules={[Pagination, Mousewheel]}
//         >
//           {data.map((d, index) => (
//             <SwiperSlide className='w-[200px]' key={index}>
//               <div className="flex flex-col justify-between px-4 py-6  border-2 border-[#C7C9C5] rounded-2xl">
//                 <p className="text-sm text-[#8C938F]">{d.date}</p>
//                 <h2 className="font-semibold text-lg text-[#565D5A]">{d.name}</h2>
//                 <p className="text-[#8C938F]">{d.description}</p>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-[#017848]">See on Trustpilot</span>
//                   <MoveRight className="text-[#017848]" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
// export default Banner
