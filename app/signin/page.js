"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Cookies from 'js-cookie';
// import { cookies } from 'next/headers';


const Signin = () => {
  const [data, setData] = useState({ email: "", Password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
  
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      console.log(res)
      const token = await res.json()
      console.log(token);
      Cookies.set('token', token.token)
      if (res.status === 402) {
        setMsg('Email and Password are required')
      } 
      else if (res.status === 401) {
        setMsg('Invalid Credentials')

      } 
      else if (res.status === 200) {
        setMsg('You Are Logged In')
        // cookies().set('token', token)
      }
      else {
        setMsg('something else')
      }
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
    }
  return (
    <main className=" w-full h-[100vh] bg-gray-900 flex content-center items-center text-white">
      <div className="mx-auto">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-col w-80">
              <h1 className="text-3xl">Sign In</h1>
              <div className="flex gap-1 flex-col">
                <label>Email</label>
                <input required
                  type="email"
                  name="email"
                  className="w-full bg-gray-300 text-black"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex gap-1 flex-col">
                <label>Password</label>
                <input required
                  type="password"
                  name="password"
                  className="text-black bg-gray-300"
                  onChange={handleChange}
                ></input>
              </div>
              <div>{msg}</div>
              <button className="w-full py-1 bg-blue-500 text-white rounded-md">
                {isLoading ? 'Loading...' : 'Sign in'}
              </button>
              <span>
                Not a user?{" "}
                <Link href="/signup" className="text-blue-500">
                  Sign up
                </Link>
              </span>
              <Link href="/" className="text-blue-500">
                Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signin
