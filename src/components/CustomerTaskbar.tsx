import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'




const taskbar = [
    {
        id: 1,
        name: "Bank Account Details",
        link: "/dashboard/customerDashboard/bankAccountDetails"
    },
    {
        id: 2,
        name: "Add Bank details",
        link: "/dashboard/customerDashboard/addBankDetails"

    },
    {
        id: 3,
        name: "Transaction Details",
        link: "/dashboard/customerDashboard/transactionDetails"
    },
    {
        id: 4,
        name: "Apply for Loan",
        link: "/dashboard/customerDashboard/applyForLoan"
    },
    {
        id: 5,
        name: "Pay Loan",
        link: "/dashboard/customerDashboard/payLoan"
    },
    {
        id: 6,
        name: "Deposit",
        link: "/dashboard/customerDashboard/deposit"
    },
    {
        id: 7,
        name: "Withdraw",
        link: "/dashboard/customerDashboard/withdraw"
    },


]

const CustomerTaskbar = () => {


    return (
        <div className=' flex flex-col h-screen my-auto justify-center items-center border-r-2'>
            {/* 
        1. bank account details
        2. transaction details ->contains history of each transaction
        3. apply for loan -> with customer_id provided , type of loan, amount to be applied, duration of loan, -> it will generate loan id
        4. pay loan -> with loan_id provided , amount to be paid, -> it will deduct amount from loan balance
        5. deposit-> with customer_id provided , amount to be added, -> it will add amount to account balance
        6. withdraw -> with customer_id provided , amount to be deducted, -> it will deduct amount from account balance
      
      */}

            <div>
                <ul className='flex flex-col items'>
                    {
                        taskbar.map((task) => {
                            return (
                                <li key={task.id} className='my-2 p-4 '>
                                    <Link href={task.link}><Button>{task.name}</Button></Link>
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
