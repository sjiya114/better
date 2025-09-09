import React from "react";

const Timeline = () => {
  const data = [
    {
      year: "2014",
      text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: "2015",
      text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: "2016",
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: "2017",
      text: "Better expands into the real estate market.",
    },
    {
      year: "2018",
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: "2022",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2023",
      text: "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      year: "Today",
      text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];

  return (
    <div className="relative w-full py-16">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300"></div>

      <div className="space-y-20">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center w-full"
            >
              {/* Left side card */}
              {isEven && (
                <div className="flex justify-end w-full pr-6 md:w-1/2">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md">
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              )}

              {/* Year bubble */}
              <div className="flex items-center justify-center bg-green-700 text-white font-bold rounded-full px-6 py-2 z-10">
                {item.year}
              </div>

              {/* Right side card */}
              {!isEven && (
                <div className="flex justify-start w-full pl-6 md:w-1/2">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md">
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
