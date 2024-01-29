import React from 'react'

function Balance({ transactions }) {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <>
        <h3>Balance</h3>
        <h1>${total}</h1>
    </>
  )
}

export default Balance;