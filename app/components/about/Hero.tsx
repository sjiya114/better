import {Play} from 'lucide-react'
function Hero() {
  return (
    <div className='flex flex-row space-x-20 max-md:flex-col mb-30 space-y-10 mx-[10vw]'>
      <div className='flex flex-col space-y-10 w-1/2 max-md:w-full '>
        <h1 className='text-[#292B29]  font-semibold text-3xl'>The status quo is broken</h1>
        <p className='text-[#7E8380]'>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
         <button className='text-sm w-fit text-white rounded-lg h-fit px-2 py-2 bg-[#004733]'>Read Vishals Story</button>
      </div>
      <div className='w-1/2 max-md:w-full'>
        <Play className='absolute ml-50 mt-42 text-white font-bold w-16 h-16 '/>
        <video src="https://youtu.be/1KjYlLBM9j4" style={{backgroundImage:`url('https://media.better.com/video/vishal-mission.jpg')`}} className='bg-cover bg-center w-110 h-90'   >
     </video>
      </div>
    </div>
  )
}

export default Hero
