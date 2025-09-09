import Image from "next/image"
import Link from "next/link"
export default function Footer() {
  return (
    <>
    <div className="flex flex-col mx-[10vw] space-y-2 max-lg:mx-4 text-xs font-normal text-black">
         <div className="flex flex-row my-10 space-x-4">
      <Image  src="/facebook.png" width={22} height={22}  alt="facebook"  />
      <Image src="/instagram.png" width={22} height={22} alt="instagram"/>
      <Image src="/linkedin.png" width={22} height={22} alt="linkedin" />
    </div>
       <p>© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
       <p>Better BMC operates under the name Better Mortgage Corporation in New York.</p>
       <p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
       <p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
       <p className="underline">New York State Housing and Anti-Discrimination Notice</p>
       <p className="underline">New York Standard Operating Procedures</p>
       <p>Texas Real Estate Commission: <span className="underline">Information About Brokerage Services | Consumer Protection Notice</span></p>
       <p>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
       <p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
       <p>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <span className="underline"> license numbers.</span></p>
       <p>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
       <p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
       <p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
       <p>Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act</p>
    </div>
    </>
  )
}
