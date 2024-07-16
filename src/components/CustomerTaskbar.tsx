import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'




const taskbar = [
    {
        id: 1,
        name: "Bank Account Details"
    },
    {
        id: 2,
        name: "Transaction Details"
    },
    {
        id: 3,
        name: "Apply for Loan"
    },
    {
        id: 4,
        name: "Pay Loan"
    },
    {
        id: 5,
        name: "Deposit"
    },
    {
        id: 6,
        name: "Withdraw"
    },

]

const CustomerTaskbar = () => {


    return (
        <div className=' flex flex-col h-screen my-auto justify-center items-center'>
            {/* 
        1. bank account details
        2. transaction details ->contains history of each transaction
        3. apply for loan -> with customer_id provided , type of loan, amount to be applied, duration of loan, -> it will generate loan id
        4. pay loan -> with loan_id provided , amount to be paid, -> it will deduct amount from loan balance
        5. deposit-> with customer_id provided , amount to be added, -> it will add amount to account balance
        6. withdraw -> with customer_id provided , amount to be deducted, -> it will deduct amount from account balance
      
      */}
            <div>
                <h1 className='top-0 w-fit rounded-full'> O-TRANSAC</h1>

            </div>
            <div>
                <ul className='flex flex-col items'>
                    {
                        taskbar.map((task) => {
                            return (
                                <li key={task.id} className='my-2 p-4 '>
                                    <Link href="/"><Button>{task.name}</Button></Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>


        </div>
    )
}

export default CustomerTaskbar
