import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/options'

const Nav = async() => {
    const session = await getServerSession(options);
  return (
    <div className='bg-[#333] text-white'>
      <div className='mx-8 flex justify-between items-center'>
        <h1>Tasks</h1>
        <div className='flex gap-4'>
            <Link href="/CreateUser">Register</Link>
            <Link href="/Member">Member</Link>
            {session ? (<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>) 
            : 
            (<Link href="/api/auth/signin">Login</Link>) }
        </div>
      </div>
    </div>
  )
}

export default Nav
