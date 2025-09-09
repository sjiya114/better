"use client"
import { useState } from "react";
function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs=[{question:"How to find your payments with a mortgage calculator for home loans",answer:"Start with the total purchase price of the property you're considering. This number drives every other calculation in your mortgage scenario. The home price, combined with the interest rate and loan term, set the context for your monthly mortgage payment. That's how to start, but there's more to consider.For example, your down payment size will change the amount financed which changes the monthly payment amount. Typically, bigger down payments will lower monthly payments.Then, there are property taxes and homeowners insurance premiums to add in. Private mortgage insurance (PMI) or FHA mortgage insurance premiums, also must be added to each payment."},
        {question:"What you can do with this home payment calculator",answer:"Since a mortgage calculator for home loans can show how hypothetical numbers affect the reality of a monthly mortgage payment, they're a great way to see how different scenarios would impact your budget before applying for a loan."},
        {question:"What does a mortgage payment include?",answer:"Your monthly mortgage payment covers more than just the loan itself. Each component plays a specific role in homeownership costs, and understanding these pieces explains why your actual payment often exceeds the principal and interest amount. Our simple mortgage payment calculator lets you see the full picture upfront—principal, interest, taxes, insurance, and PMI—so there are no surprises later."},
        {question:"Mortgage payment formula",answer:"Every mortgage payment calculator uses a mathematical formula to determine your monthly payment. This mortgage payment formula shows exactly how lenders calculate what you'll pay each month on your home loan."},
        {question:"How to lower monthly mortgage payments",answer:"Several strategies can reduce your housing costs without refinancing or selling your home. Here's what works:Make a larger down payment if you can. A bigger down payment cuts your loan amount and may eliminate private mortgage insurance (PMI), which typically costs 0.3% to 1.5% of your loan annually."},
        {question:"Types of mortgage loans",answer:"Different mortgage loan types offer different strengths and weaknesses for borrowers. Understanding these differences helps evaluate which loan type aligns with your financial situation and payment goals."}
    ]
  return (
    <>
     <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="max-w-4xl mx-auto pt-20 pb-20 flex flex-col items-center justify-center px-4 md:px-0">
                {faqs.map((faq, index) => (
                    <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
            </>
  )
}

export default FAQ
