"use client"
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/public/homepage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen flex flex-col justify-center items-center bg-black"
    >
      <div><ModeToggle /></div>
      <div className="text-center">
        <h1 className="text-xl text-white mb-4">o-transac</h1>
        <div className="flex justify-center">
          <Link href="/admin"><Button className="bg-gray-400 text-black mx-4">Admin</Button></Link>
          <Link href="/customer">
            <Button className="bg-gray-400 text-black mx-4">Customer</Button>

          </Link>

        </div>
      </div>
    </div>
  );
}
