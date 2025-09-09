
function Cards() {
  return (
    <>
    <div className="px-[10vw]">
      <h1 className="text-3xl font-bold mb-10 mt-10">Simple Steps to get approved</h1>
       <div className="flex flex-row flex-wrap space-x-6 ">
        <div className="bg-[#F0F7F1] px-6 py-6 flex flex-col space-y-2  w-[300px] h-[300px] max-md:w-full">
          <p className="text-green-600 text-6xl">1</p>
          <p className=" text-2xl font-bold">Share a few details</p>
          <p className="text-gray-500">Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won’t affect your credit score.</p>
        </div>
        <div  className="bg-[#F0F7F1] px-6 py-6 flex flex-col space-y-2 h-[300px] w-[300px] max-md:w-full">
         <p className="text-green-600 text-6xl">2</p>
         <p className=" text-2xl font-bold ">See your homebuying budget</p>
         <p  className="text-gray-500">In minutes, we’ll show you exactly how much you can get pre-approved for—so you know your price range before you shop.</p>
        </div>
        <div  className="bg-[#F0F7F1] px-6 py-6 flex flex-col space-y-2 h-[300px] w-[300px] max-md:w-full">
        <p className="text-green-600 text-6xl">3</p>
        <p className=" text-2xl font-bold">Get your pre-approval letter</p>
        <p  className="text-gray-500">Download your letter instantly and start touring homes with confidence (and a stronger offer in hand).</p>
        </div>
       </div>
    </div>
    <div className="flex flex-col space-y-10 items-center justify-center pt-20 pb-20">
       <h1 className="font-bold text-3xl">Check your homebuying power</h1>
       <button className="bg-[#017848]  text-white px-6 py-4 rounded-2xl">See what I qualify for</button>
       <div className="flex flex-col space-y-1 justify-center items-center">
               <span>...in as little as 3 minutes –</span>
       <span>no credit impact</span>
       </div>

    </div>
    </>
  )
}

export default Cards
