import { MoveRight } from "lucide-react"
function Rates() {
    const data=[
    {
        "name": "Affordability calculator",
        "description": "See how much home you can comfortably afford before you start shopping.",
        "btn": "Calculate my budget"
    },
    {
        "name": "Rent vs. buy calculator",
        "description": "Wondering if it’s time to buy? Compare the real costs side by side.",
        "btn": "Compare my costs"
    },
    {
        "name": "HELOC payment calculator",
        "description": "Know what getting cash from your home could cost before you decide.",
        "btn": "Estimate my payments"
    },
    {
        "name": "Mortgage rates",
        "description": "Stay on top of rates so you can lock in the right one at the right time.",
        "btn": "See today's rates"
    },
    {
        "name": "HELOC rates",
        "description": "Compare the latest HELOC rates and understand your options.",
        "btn": "See today's rates"
    },
    {
        "name": "Refinance rates",
        "description": "Check current refi rates to see if lowering your payment is within reach.",
        "btn": "See today's rates"
    }
]

  return (
    <div className="flex flex-col space-y-10 px-[18vw] items-center justify-center pt-20 pb-20">
      <h1 className="font-bold text-center text-3xl">More resources:Rates & Calculators</h1>
      <div className="flex flex-row flex-wrap space-x-6">
         {data.map((d,index)=>(
        <div key={index} className='flex flex-col justify-around px-4 py-2 w-[260px] max-sm:h-fit  max-md:w-full h-[240px] max-md:py-6  max-md:h-[200px]  border-2 border-[#C7C9C5] rounded-2xl'>
      <h1 className='font-semibold text-black'>{d.name}</h1>
      <p className='text-[#8C938F]'>{d.description}</p>
       <div className='flex flex-row space-x-2'>
         <span className='text-[#017848] font-bold'>{d.btn}</span>
         <MoveRight className='text-[#017848]' />
       </div>
    </div>
    ))}
      </div>
    </div>
  )
}

export default Rates
