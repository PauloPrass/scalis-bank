"use client";
import React, { useState } from "react";
import UserAccountList from './components/userAccountList';

export default function Home() {
  const [checkingBalance, setCheckingBalance] = useState(0);
  const [savingsBalance, setSavingsBalance] = useState(0);

  const transferFunds = (from, to, amount) => {
    if (from === 'checking' && to === 'savings') {
      if (checkingBalance >= amount) {
        setCheckingBalance(checkingBalance - amount);
        setSavingsBalance(savingsBalance + amount);
      } else {
        alert('Insufficient funds in checking account');
      }
    } else if (from === 'savings' && to === 'checking') {
      if (savingsBalance >= amount) {
        setSavingsBalance(savingsBalance - amount);
        setCheckingBalance(checkingBalance + amount);
      } else {
        alert('Insufficient funds in savings account');
      }
    }
  };

  return (
    <div>
      <h1>User Account Dashboard</h1>
      <UserAccountList
        checkingBalance={checkingBalance}
        savingsBalance={savingsBalance}
        transferFunds={transferFunds}
      />
    </div>
  );
}
