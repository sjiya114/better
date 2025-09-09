import  {MoveRight} from 'lucide-react'
function Card() {
    const data=[
        {
            name:"The LGBTQ+ homeownership story in numbers",
            description:"The fight against LGBTQ+ housing discrimination has turned a corner. Learn your"
        }, {
            name:"Vishal Garg, Founder and CEO of Better",
            description:"Better.com CEO Vishal Garg has been interested in tech and lending for"
        }, {
            name:"The Year of the Home: 2020 in Review",
            description:"In the socially distanced world of 2020, Better helped 88,100+ new clients navigate their"
        }, {
            name:"What is Better Mortgage?",
            description:"We launched Better Mortgage because the mortgage industry is"
        }, {
            name:"Why I Started Better Mortgage",
            description:"Most founders have a story they pitch when asked about what their company"
        }, {
            name:"Finding Home: Dan and Louise",
            description:"They didn’t think homeownership was in the cards. Now they’re living a"
        },
         {
            name:"Finding Home: Taisha",
            description:"A doctor and single parent, forced to downsize after divorce, navigates debt"
        },
         {
            name:"How AI Mortgage Lending is Transforming the Ho...",
            description:"Explore AI mortgage lending, its challenges, risk management, and how AI"
        },
         {
            name:"Self-employed? Here’s how to get a mortgage",
            description:"Here’s what our underwriters take into consideration when reviewing application"
        }
    ]
  return (
    <>
    {data.map((d)=>(
        <div className='flex flex-col justify-around px-4 py-2 w-[240px] max-sm:h-fit  max-md:w-full h-[240px] max-md:py-6  max-md:h-[200px]  border-2 border-[#C7C9C5] rounded-2xl'>
      <h1 className='font-semibold text-[#565D5A]'>{d.name}</h1>
      <p className='text-[#8C938F]'>{d.description}</p>
       <div className='flex flex-row space-x-2'>
         <span className='text-[#017848]'>Read now</span>
         <MoveRight className='text-[#017848]' />
       </div>
    </div>
    ))}
    
    </>
    
  )
}

export default Card
