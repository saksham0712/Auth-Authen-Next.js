"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";


const Signin = () => {
    const [data, setData] = useState({ email: "", Password: "" })
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    useEffect(() => {
      console.log('this is signup',data)
    }, [data])
    
  return (
    <main className=" w-full h-[100vh] bg-gray-900 flex content-center items-center text-white">
      <div className="mx-auto">
        <div>
          <form>
            <div className="flex gap-4 flex-col w-80">
              <h1 className="text-3xl">Sign In</h1>
              <div className="flex gap-1 flex-col">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-gray-300 text-black"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex gap-1 flex-col">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="text-black bg-gray-300"
                  onChange={handleChange}
                ></input>
              </div>
              <button className="w-full py-1 bg-blue-500 text-white rounded-md">
                Sign In
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
