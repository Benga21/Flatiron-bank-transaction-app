import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [newTransaction, setNewTransaction] = useState({
    id: Date.now(),
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTransaction);
    setNewTransaction({ id: Date.now(), date: '', description: '', category: '', amount: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="date"
        value={newTransaction.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <input
        name="description"
        value={newTransaction.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;