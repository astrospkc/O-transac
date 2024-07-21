"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import {
//     IconBrandGithub,
//     IconBrandGoogle,
//     IconBrandOnlyfans,
// } from "@tabler/icons-react";



import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/router";

function IdType() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a loan type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Id proof Type</SelectLabel>
                    <SelectItem value="apple">PAN CARD</SelectItem>
                    <SelectItem value="banana">AADHAR CARD</SelectItem>


                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


export default function Login() {

    const [credentials, setCredentials] = useState({

        email: "member@gmail.com",
        password: "password"
    })
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const url = "http://127.0.0.1:5000";
        const response = await fetch("http://localhost:4000/api/customer/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.success) {
            //save the auth token
            localStorage.setItem("token", jsonResponse.authtoken);
            router.push("/customer/dashboard/customerDashboard");

            console.log("why there is  /home");
        } else {
            alert("Invalid credentials");
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };



    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-white dark:bg-black">
            <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
                Welcome to O-Transac
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to O-Transac
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={handleChange} value={credentials.email} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" onChange={handleChange} value={credentials.password} />
                </LabelInputContainer>



                <Link href={"/dashboard/customerDashboard"}>
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Login &rarr;
                        <BottomGradient />
                    </button>

                </Link>

                <h1>No account</h1>
                <Link href="/customer/signup">
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Sign Up &rarr;
                        <BottomGradient />
                    </button>
                </Link>


                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />



            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
