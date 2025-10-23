import React, { useState } from 'react'

const Register = () => {
  
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const handleRegister = () => {
     if (!email || !password) {
    alert("error");
    return;
  }
}
  
  
  
  
    return (
 <div className='bg-[#A27B5C] min-h-screen'>
        <section className='border-2 rounded-2xl flex flex-col justify-center items-center gap-2 bg-[#EBCB90]  p-12 w-fit m-auto  mt-32 relative '>
            <label className='mr-36' htmlFor="email">Email:</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='border-2 bg-gray-50' 
            id='email' type="email" placeholder=' Email...' />
             <label className='mr-29' htmlFor="password">Password:</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='border-2 bg-gray-50 '
            id='password' type="password" placeholder=' Password...' />
            
            <a className='text-[10px] absolute bottom-28 right-12 hover:underline' href="#">Forgot my Password</a>

            <div className='flex justify-center gap-3 mt-8'>
                <button
                onClick={handleRegister}
                 className='bg-sky-500 rounded-2xl p-2 text-white'>Register</button>
                <button className='bg-green-500 rounded-2xl p-2 text-white'>Login</button>
            </div>
        </section>
    </div>
  )
}

export default Register