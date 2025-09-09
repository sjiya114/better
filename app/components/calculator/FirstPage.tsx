"use client";
import React, { useState, useEffect, useRef } from "react";
import "./FirstPage.css";

const FirstPage = () => {
  const [homePrice, setHomePrice] = useState(1207800);
  const [downPayment, setDownPayment] = useState(241560);
  const [downPercent, setDownPercent] = useState(20);
  const [loanLength, setLoanLength] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("462003");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [dragging, setDragging] = useState(false);

  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const calculateMonthlyPayment = (principal: number, ratePercent: number, years: number) => {
    const monthlyInterestRate = ratePercent / 100 / 12;
    const payments = years * 12;
    if (monthlyInterestRate === 0) return principal / payments;

    return (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -payments))
    );
  };

  const formatNumber = (num: number) => {
    if (!num && num !== 0) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const syncDownPayment = (price: number, percent: number) => {
    return Math.round((price * percent) / 100);
  };

  const syncDownPercent = (price: number, down: number) => {
    if (price === 0) return 0;
    return Math.round((down / price) * 100);
  };

  useEffect(() => {
    const principal = homePrice - downPayment;
    const payment = calculateMonthlyPayment(principal, interestRate, loanLength);
    setMonthlyPayment(payment);

    const percent = syncDownPercent(homePrice, downPayment);
    if (!dragging && percent !== downPercent) {
      setDownPercent(percent);
    }
  }, [homePrice, downPayment, interestRate, loanLength]);

  useEffect(() => {
    const down = syncDownPayment(homePrice, downPercent);
    if (!dragging && down !== downPayment) {
      setDownPayment(down);
    }
  }, [downPercent, homePrice]);

  const handleProgressBarClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = clickX - rect.left;
    const percent = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    const newDownPayment = Math.round((homePrice * percent) / 100);
    setDownPayment(newDownPayment);
    setDragging(true);
  };

  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    handleProgressBarClick(e);
  };

  const progressPercent = Math.min(100, (downPayment / homePrice) * 100);

  return (
    <div
      className="mt-20 px-[10vw] p-8 bg-[#f2f9f4]  font-sans"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
    >
      <h1 className="font-bold text-3xl mb-10">Estimate your monthly mortgage payments</h1>
      <div className="calculator">
        <div className="inputs-row">
          <div className="input-group">
            <label>Home price</label>
            <div className="input-with-prefix">
              <span>$</span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Down payment</label>
            <div className="input-with-prefix">
              <span>$</span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="input-group small">
            <label>%</label>
            <input
              type="number"
              value={downPercent}
              onChange={(e) => setDownPercent(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="inputs-row">
          <div className="input-group">
            <label>Length of loan</label>
            <select value={loanLength} onChange={(e) => setLoanLength(Number(e.target.value))}>
              <option value={30}>30 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>
          <div className="input-group small">
            <label>Interest rate</label>
            <div className="input-with-prefix">
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <span>%</span>
            </div>
          </div>
          <div className="input-group">
            <label>ZIP code</label>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
        </div>

        <div className="result-section">
          <div>
            <p>Monthly payment</p>
            <h2>${formatNumber(Math.round(monthlyPayment))}/mo</h2>
          </div>
          <button className="btn">Get pre-approved</button>
        </div>

        <div
          className="progress-container"
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <div className="progress-bg">
            <div
              className="progress-bar h-2"
              style={{ width: `${progressPercent}%` }}
            ></div>
            <div
              className="progress-thumb"
              style={{ left: `${progressPercent}%` }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
