import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TransactionsProvider } from "./context/TransactionContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <TransactionsProvider>
      <App />
      </TransactionsProvider>
    </React.StrictMode>
  </BrowserRouter>
)
