import React, { useState } from 'react';

const UserAccountList = ({ checkingBalance, savingsBalance, transferFunds }) => {
  const [amount, setAmount] = useState('');

  const handleTransfer = (from, to) => {
    if (amount <= 0) {
      alert('Amount must be greater than 0');
      return;
    }
    transferFunds(from, to, parseFloat(amount));
    setAmount('');
  };

  return (
    <div>
      <h2>Checking Account: ${checkingBalance}</h2>
      <h2>Savings Account: ${savingsBalance}</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => handleTransfer('checking', 'savings')}>Transfer to Savings</button>
      <button onClick={() => handleTransfer('savings', 'checking')}>Transfer to Checking</button>
    </div>
  );
};

export default UserAccountList;
