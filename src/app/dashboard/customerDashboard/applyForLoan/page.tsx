"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"




import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function LoanType() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a loan type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Loan Type</SelectLabel>
                    <SelectItem value="apple">Personal Loan</SelectItem>
                    <SelectItem value="banana">Buisness Loan</SelectItem>
                    <SelectItem value="blueberry">Home Loan</SelectItem>
                    <SelectItem value="grapes">Education Loan</SelectItem>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function LoanPayType() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a loan type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Loan Repayment Type</SelectLabel>
                    <SelectItem value="emi"> EMI(Equated Monthly Installment)</SelectItem>
                    <SelectItem value="foreclosure">Foreclosure</SelectItem>
                    <SelectItem value="interest">Interest</SelectItem>


                </SelectGroup>
            </SelectContent>
        </Select>
    )
}






const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
}


export default function ApplyForLoan() {
    // ...

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    return (

        // loan details
        // 1. type of loan
        // 2. amount
        // 3. duration
        // 4. Submit
        // 5.Repayment terms (interest rate, tenure, installment amount)
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-10 px-10">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type of loan</FormLabel>
                            <FormControl>
                                {/* <Input placeholder="shadcn" {...field} />
                                 */}
                                <LoanType />
                            </FormControl>
                            <FormDescription >
                                Loan type
                            </FormDescription>
                            <FormMessage />

                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="1000" />
                            </FormControl>
                            <FormDescription>
                                Loan amount
                            </FormDescription>
                            <FormMessage />

                            <FormLabel>Loan Repayment Type</FormLabel>
                            <FormControl>
                                {/* <Input placeholder="1000" /> */}
                                <LoanPayType />
                            </FormControl>
                            <FormDescription>
                                Loan repayment type
                            </FormDescription>
                            <FormMessage />


                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input placeholder="duration" />
                            </FormControl>
                            <FormDescription>
                                Duration of the loan
                            </FormDescription>
                            <FormMessage />

                            <FormLabel>Loan Interest</FormLabel>
                            <FormControl>
                                <Input placeholder="interest" />
                            </FormControl>
                            <FormDescription>
                                Loan interest
                            </FormDescription>
                            <FormMessage />
                        </FormItem>


                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
