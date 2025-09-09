"use client"
import { useState } from "react";
function FAQS() {
      const [openIndex, setOpenIndex] = useState<number | null>(null);
       const faqs = [
    {
        "question": "How do I calculate my mortgage payment?",
        "answer": "To calculate it manually, you can use this formula: M = P × [ i × (1 + i)^n ] ÷ [ (1 + i)^n – 1]. In this equation, M is your monthly payment, P is the loan amount, i is the monthly interest rate (your annual rate divided by 12), and n is the total number of payments over the life of the loan. Most people prefer to use an online mortgage calculator, which can factor in property taxes, homeowners insurance, HOA fees, and PMI."
    },
    {
        "question": "Are mortgages compounded monthly?",
        "answer": "Yes. In the U.S., fixed-rate mortgages are generally structured with monthly amortization, which means that interest is compounded monthly and each payment is designed to pay down both interest and principal. Over time, more of your payment goes toward reducing principal and less toward interest. Mortgage payments may also include property taxes and homeowners insurance, often collected in escrow."
    },
    {
        "question": "What do closing costs typically cost?",
        "answer": "Closing costs usually run between two percent and five percent of the total home purchase price. They can include fees for loan origination, appraisal, title insurance, attorney services, and prepaid expenses like property taxes or homeowners insurance. For example, on a $400,000 home, closing costs might fall between $8,000 and $20,000 depending on the location and loan type."
    },
    {
        "question": "What is the 2% rule for mortgage payoff?",
        "answer": "The 2% rule suggests paying off your mortgage faster by adding an extra amount equal to about 2% of your monthly payment toward the principal each month. For example, if your payment is $2,000, setting aside an extra $40 (2%) can shorten your loan term and save thousands in interest. The key is making consistent extra payments and ensuring they are applied directly to the principal."
    }
]

  return (

    <div className="flex pt-40 ml-[10vw] pb-20 flex-row space-x-4">
       <div>
        <h1 className="font-bold text-2xl">Mortgage Calculator FAQs</h1>
       </div>
        <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
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
    </div>
  )
}

export default FAQS
