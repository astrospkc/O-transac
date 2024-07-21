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

function AccountType() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a account type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Account Type</SelectLabel>
                    <SelectItem value="Savings">Savings Account</SelectItem>
                    <SelectItem value="Current">BCurrent Account</SelectItem>
                    <SelectItem value="salary">Salary Account</SelectItem>
                    <SelectItem value="fd">Fixed Deposit Account</SelectItem>
                    <SelectItem value="loan">Loan Account</SelectItem>
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



export default function AddBankDetails() {
    // ...

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    return (

        // bank details
        //     1.Bank Name-> make a dropdown list
        //     2. Account Number
        //     3. Account Name
        //     4. Account Type
        //     5. IFSC Code
        //     6. Address
        //     7. Submit
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-10 px-10">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription >
                                Bank Information
                            </FormDescription>
                            <FormMessage />

                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Your Account number of this bank
                            </FormDescription>
                            <FormMessage />


                            <FormLabel>Account Holder Name</FormLabel>
                            <FormControl>
                                {/* <Input placeholder="shadcn" {...field} /> */}
                                <AccountType />
                            </FormControl>
                            <FormDescription>
                                Account holder name
                            </FormDescription>
                            <FormMessage />


                            <FormLabel>Account Type</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Your Account type
                            </FormDescription>
                            <FormMessage />


                            <FormLabel>IFSC code of Bank</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                IFSC code of your Bank Account
                            </FormDescription>
                            <FormMessage />


                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Address of yours
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
