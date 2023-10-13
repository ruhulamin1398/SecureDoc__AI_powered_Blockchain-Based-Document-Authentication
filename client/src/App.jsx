import { useState ,useContext} from 'react'
import logo from './logo.svg'
import './App.css'
import { TransactionContext } from './context/TransactionContext'
 
 

function App() {
  const [count, setCount] = useState(0)
  const {connectWallet , currentAccount , transactionCount , demTransactionsContract,uploadFiles } = useContext(TransactionContext)


  function logTransaction(){
    // console.log(transactionCount) ;
    console.log(demTransactionsContract); 

    uploadFiles()
   
  }

  return (
    <div className='text-center'>
    <h1 className="text-3xl font-bold underline mt-[200px]  text-center">
      Hello world!
    </h1>
    <br/>
{ !currentAccount? 

<button className='text-3xl font-bold underline' onClick={()=>{ connectWallet()}}> connectWallet</button>
:
<>
<button className='text-3xl font-bold underline'  > {currentAccount}</button> <br/>
<button className='text-3xl font-bold underline'  onClick={ ()=>{ logTransaction()}} > Get Transactions</button>
</>

    
  }
    </div>
  )
}

export default App
