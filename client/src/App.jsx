import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import { TransactionContext } from './context/TransactionContext'

function App() {
  const [count, setCount] = useState(0)

  const { value } = useContext(TransactionContext)

  return (
    <>
 
 
    <h1 className="text-3xl font-bold underline">
      Hello world! {value}
    </h1>


 
 
 
    </>
  )
}

export default App
