import { useState } from 'react'
import AddTransaction from './Components/AddTransactionList'
import './App.css'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'

function App() {
  const initialState = {
    transaction: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ],
  }

  const [transactions, setTransaction] = useState(initialState.transaction);

  function deleteTransaction(id){
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransaction(updatedTransactions);
  }
  
  function addTransaction(text, amount) {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount

    };
    setTransaction([...transactions,newTransaction])
  }

  return (
    <>
      <Header />
      <Balance transactions={ transactions} />
      <IncomeExpense transactions={ transactions} />
      <TransactionList transactions={transactions} deleteTransaction={ deleteTransaction} />
      <AddTransaction transactions={transactions} addTransaction={ addTransaction} />
    </>
  )
}

export default App