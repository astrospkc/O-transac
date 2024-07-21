import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'




const taskbar = [
    {
        id: 1,
        name: "Customer Details",
        link: "/dashboard/adminDashboard/customerDetails"
    },
    {
        id: 2,
        name: "Add employee",
        link: "/dashboard/adminDashboard/addEmployee"

    },
    {
        id: 3,
        name: "Loan Approval Details",
        link: "/dashboard/adminDashboard/loanApprovalDetails"
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
