import Image from "next/image"

function Banner() {
  return (
    <div className="pt-40  px-[32vw] flex flex-col space-y-10 bg-[#014E37] max-md:px-4  items-center justify-center">
       <h1 className="text-white  text-center text-8xl max-md:text-5xl  font-bold">The first 
<span className="bg-gradient-to-r   from-[#00FF80] to-[#E510FF] bg-clip-text text-transparent "> AI-powered Mortgage</span></h1>
<p className="text-white text-center text-2xl">Our tech unlocks lower rates, higher chances of approval,
and a lightning‑fast process from approval to closing. Over $100 billion funded.</p>
<button className="text-black px-2 py-2 w-fit rounded-2xl bg-[#1EE07F]">Start my pre-approval</button>
 <p className="text-sm text-white">3 min
| No hard credit check</p>
   <img src="https://media.better.com/better-com/homepage/ai-powered-fico.webp" className="w-120 h-80" alt="image"  />
    </div>
  )
}

export default Banner
