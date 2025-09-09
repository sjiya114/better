
function Template() {
  return (
     <>
    <div className="flex flex-col space-y-10 items-center justify-center pt-20 pb-20">
       <h1 className="font-bold text-3xl">Check your homebuying power</h1>
       <button className="bg-[#017848]  text-white px-6 py-4 rounded-2xl">See what I qualify for</button>
       <div className="flex flex-col space-y-1 justify-center items-center">
               <span>...in as little as 3 minutes –</span>
       <span>no credit impact</span>
       </div>

    </div>
     <hr className="h-2 mx-[10vw] text-gray-500" />
      <div className="pt-4 px-[10vw] pb-10">
        <p className="italic text-sm">Mortgage Calculator is for estimation purposes only. Real payments will vary and may include (but are not limited to) the following fees: home insurance, HOA payments, taxes, regional fees, etc. All calculations assume eligibility for the selected loan. This is not a commitment to lend.</p>
      </div>
    </>
  )
}

export default Template
