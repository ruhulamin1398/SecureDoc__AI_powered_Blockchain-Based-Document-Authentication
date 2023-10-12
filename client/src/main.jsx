import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransactionContextProvider } from './context/TransactionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <TransactionContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionContextProvider>
)
