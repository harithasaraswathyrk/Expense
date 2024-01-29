import React from 'react'

function TransactionList({transactions, deleteTransaction}) {
  return (
      <>
          <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction => (
          <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>${ transaction.amount}</span><button class="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList