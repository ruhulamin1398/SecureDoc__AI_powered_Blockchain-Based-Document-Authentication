import React, { useContext, useState } from 'react';
import { TransactionContext } from '../../context/TransactionContext';

const Transaction = () => {
    const [count, setCount] = useState(0);
    const { connectWallet, currentAccount, demTransactionsContract, uploadFiles } = useContext(TransactionContext);

    function logTransaction() {
        console.log(demTransactionsContract);
        if (uploadFiles) {
            uploadFiles();
        } else {
            console.log('uploadFiles is not defined in TransactionContext');
        }
    }

    return (
        <div className='text-center'>
            <h1 className="text-3xl font-bold underline mt-[200px]  text-center">
                Hello world!
            </h1>
            <br />
            {!currentAccount ?
                <button className='text-3xl font-bold underline' onClick={() => { connectWallet() }}>Connect Wallet</button>
                :
                <>
                    <button className='text-3xl font-bold underline'>{currentAccount}</button><br />
                    <button className='text-3xl font-bold underline' onClick={() => { logTransaction() }}>Get Transactions</button>
                </>
            }
        </div>
    );
};

export default Transaction;
