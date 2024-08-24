"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Signin = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert('hello')
    setIsLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.status === 401) {
        setMsg('Email Already Exists');
      } else if(res.status === 402){
        setMsg('Provide Email & Password');
      } else if(res.status === 200){
        setMsg('User Registered Successfully');
      } else {
        setMsg('Something else');
      }
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setMsg(error)
    }
  }
  
  return (
    <main className=" w-full h-[100vh] bg-gray-900 flex content-center items-center text-white">
      <div className="mx-auto">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-col w-80">
              <h1 className="text-3xl">Sign Up</h1>
              <div className="flex gap-1 flex-col">
                <label>Name</label>
                <input required
                  type="text" name="name"
                  className="w-full bg-gray-300 text-black" onChange={handleChange}
                ></input>
              </div>
              <div className="flex gap-1 flex-col">
                <label>Email</label>
                <input required
                  type="email" name="email"
                  className="w-full bg-gray-300 text-black" onChange={handleChange}
                ></input>
              </div>
              <div className="flex gap-1 flex-col">
                <label>Password</label>
                <input required name="password"
                  type="password"
                  className="text-black bg-gray-300" onChange={handleChange}
                ></input>
              </div>
              <div>{msg}</div>
              <button className="w-full py-1 bg-blue-500 text-white rounded-md">
                {isLoading ? 'Loading...' : 'Sign up'}
              </button>
              <span>
                Already a user?{" "}
                <Link href="/signin" className="text-blue-500">
                  Sign In
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
};

export default Signin;
