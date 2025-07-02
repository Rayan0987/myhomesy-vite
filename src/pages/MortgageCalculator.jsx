// src/components/MortgageCalculator.jsx
import React, { useState } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPaid, setTotalPaid] = useState(null);

  const calculate = () => {
    const loanAmount = price - downPayment;
    const months = years * 12;
    const monthlyInterest = interestRate / 100 / 12;

    const x = Math.pow(1 + monthlyInterest, months);
    const monthly = (loanAmount * x * monthlyInterest) / (x - 1);

    const total = monthly * months;
    const interest = total - loanAmount;

    setMonthlyPayment(monthly.toFixed(0));
    setTotalInterest(interest.toFixed(0));
    setTotalPaid(total.toFixed(0));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">حاسبة القروض العقارية</h1>

      <div className="grid gap-4">
        <input
          type="number"
          placeholder="سعر العقار (ل.س)"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="الدفعة الأولى (ل.س)"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="مدة القرض (بالسنوات)"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <input
          type="number"
          step="0.1"
          placeholder="نسبة الفائدة السنوية (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="p-2 border rounded"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          احسب القسط
        </button>
      </div>

      {monthlyPayment && (
        <div className="mt-6 p-4 border rounded bg-gray-100 text-right space-y-2">
          <div>💳 القسط الشهري: <span className="font-bold">{monthlyPayment} ل.س</span></div>
          <div>📈 إجمالي الفوائد: <span className="font-bold">{totalInterest} ل.س</span></div>
          <div>🏦 إجمالي المبلغ المدفوع: <span className="font-bold">{totalPaid} ل.س</span></div>
        </div>
      )}
    </div>
  );
}
