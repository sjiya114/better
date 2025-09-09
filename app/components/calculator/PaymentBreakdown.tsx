"use client"
import { useState } from "react";
import "./PaymentBreakdown.css";

export default function PaymentBreakdown() {
  const [principal] = useState(9171);
  const [taxes, setTaxes] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [utilities] = useState(0);
  const [hovered, setHovered] = useState({key:"",label:"",value:0,color:"",description:""});

  const items = [
    {
      key: "principal",
      label: "Principal & interest",
      value: principal,
      color: "green",
      description:
        "Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.",
    },
    {
      key: "taxes",
      label: "Property taxes",
      value: taxes,
      color: "indigo",
      description:
        "Property taxes are levied by your local government to fund public services.",
    },
    {
      key: "insurance",
      label: "Homeowners insurance",
      value: insurance,
      color: "blue",
      description:
        "Homeowners insurance covers losses and damages to your residence and assets in the home.",
    },
    {
      key: "hoa",
      label: "HOA fees",
      value: hoa,
      color: "yellow",
      description:
        "HOA fees are paid to your homeowners association for neighborhood maintenance and amenities.",
    },
    {
      key: "utilities",
      label: "Utilities",
      value: utilities,
      color: "red",
      description:
        "Utilities include services like electricity, water, gas, and trash removal.",
    },
  ];

  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-grid">
          {/* Left Section - Progress Bar + Hover Card */}
          <div className="left-section ">
            <div className="progress-bar flex w-full h-[80px]  rounded-2xl">
              {items.map((item) => {
                const percent = total ? (item.value / total) * 100 : 0;
                return (
                  <div
                    key={item.key}
                    className={`bar-section ${item.color}`}
                    style={{ width:` ${percent}%` }}
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered({key:"",label:"",value:0,color:"",description:""})}
                  >
                    {percent >= 15 ? Math.round(percent)+"%" : ""}
                  </div>
                );
              })}
            </div>

            {hovered && (
              <div className="hover-card">
                <h3>{ hovered?.label}</h3>
                <p>{hovered?.description}</p>
              </div>
            )}
          </div>

          {/* Right Section - Details */}
          <div className="right-section">
            <h2 className="total">${total.toLocaleString()}/mo</h2>

            <p className="breakdown-title">Monthly payment breakdown</p>

            <div className="details-list">
              {items.map((item) => (
                <div key={item.key} className="detail-row">
                  <span className="label">
                    <span className={`color-dot ${item.color}`}></span>
                    {item.label}
                  </span>
                  {item.key === "principal" || item.key === "utilities" ? (
                    <span className="value">
                      ${item.value.toLocaleString()}
                    </span>
                  ) : (
                    <input
                      type="number"
                      className="input-box"
                      value={item.value}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (item.key === "taxes") setTaxes(val);
                        if (item.key === "insurance") setInsurance(val);
                        if (item.key === "hoa") setHoa(val);
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <button className="copy-btn">Copy estimate link</button>
          </div>
        </div>
      </div>
    </div>
  );
}