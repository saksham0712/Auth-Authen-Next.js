"use client"
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import { useRouter } from 'next/router';

const Protected = () => {
const [msg, setMsg] = useState('')
    useEffect(() => {
        const func = async () => {

            const token = Cookies.get('token');
           const res = await fetch('/api/protected', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            const data = await res.json()
            if(data.user.email){
            setMsg(data.user.email)
            }
            else if (data.user.message === 'invalid token') {
              setMsg('Not authorized')
            }
            else if (data.user.message === 'invalid signature') {
              setMsg('Gaddari karbe?')
          }
            console.log(data)

    }
    func();
    })
    
  return (
    <h1>
      Hello {msg}
    </h1>
  )
}

export default Protected
