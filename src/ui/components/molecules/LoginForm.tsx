'use client'

import { useState } from "react";
import Input from "../atoms/Input";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  return(
    <div className="bg-green-500 p-8 shadow-md rounded-md gap-4 flex flex-col ">
      <img src="/logo.png" alt="logo" width={350} />

      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail..." />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />

      <Link href={'/maps'} className="w-full">
        <button className="p-2 w-full bg-green-200 rounded">
          Login
        </button>
      </Link>
    </div>
  )
}
