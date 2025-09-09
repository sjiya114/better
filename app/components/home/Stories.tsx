  import { Star } from "lucide-react"
function Stories() {
  return (
    <div className="flex flex-row pt-20 pb-20 px-20 max-md:flex-col max-md:px-6 space-x-10">
       <div className="w-1/2 max-md:w-full flex flex-col space-y-8">
        <img src={`https://img.youtube.com/vi/pKy7cNtaJ0c/maxresdefault.jpg`} alt="YouTube Shorts" className="rounded-lg w-100 max-md:w-full  h-fit bg-center " />

       <div className="flex flex-row space-x-4">
         
    
           <button className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Paul</button>
        <button className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Amanda</button>
        <button className="border-[1px] border-gray-400 hover:border-4 hover:border-[#004733] hover:text-[#004733]  rounded-2xl px-4 py-2">Tiara</button>
       </div>
      
       </div>
       <div className="flex w-1/2 max-md:w-full flex-col space-y-8">
        <h1 className="font-bold text-7xl">Find out why we’re better.</h1>
         <button className="text-white px-2 py-2 w-fit rounded-2xl font-semibold bg-[#004733]">Start all our stories</button>
         <div>
           <p className="flex flex-row space-x-4"><Star className="" color="#23AD7A"/> Trustpilot Excellent 4.4 out of 5</p>
         </div>
        
       </div>
    </div>
  )
}

export default Stories
