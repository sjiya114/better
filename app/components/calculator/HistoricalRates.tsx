"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./HistoricalRates.css";

const data = [
  { month: "Sep", purchase: 5.85, refinance: 5.95 },
  { month: "Oct", purchase: 5.75, refinance: 6.0 },
  { month: "Nov", purchase: 6.45, refinance: 6.0 },
  { month: "Dec", purchase: 6.3, refinance: 6.05 },
  { month: "Jan", purchase: 6.55, refinance: 6.1 },
  { month: "Feb", purchase: 6.33, refinance: 6.82 },
  { month: "Mar", purchase: 6.4, refinance: 6.82 },
  { month: "Apr", purchase: 6.5, refinance: 6.82 },
  { month: "May", purchase: 6.42, refinance: 6.82 },
  { month: "Jun", purchase: 6.45, refinance: 6.82 },
  { month: "Jul", purchase: 6.2, refinance: 7.55 },
  { month: "Aug", purchase: 6.2, refinance: 7.6 },
];

export default function HistoricalRates() {
  const [selectedState, setSelectedState] = useState("All (average)");
  const [loanType, setLoanType] = useState("All (average)");

  // safe formatters
  const formatTick = (val: string | number) => Number(val).toFixed(1);
  const formatTooltip = (val: string | number) => Number(val).toFixed(3);

  return (
    <div className="historical-container">
      <h2 className="historical-title">Historical mortgage rate trends</h2>

      {/* Dropdown filters */}
      <div className="filters">
        <div className="filter-block">
          <label>State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option>All (average)</option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
          </select>
        </div>

        <div className="filter-block">
          <label>Loan type</label>
          <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
            <option>All (average)</option>
            <option>30-year fixed</option>
            <option>15-year fixed</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[5, 8]} tickFormatter={formatTick} />
          <Tooltip formatter={(val, name) => [formatTooltip(val as number), name]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="purchase"
            stroke="#00C49F"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="refinance"
            stroke="#8884d8"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
