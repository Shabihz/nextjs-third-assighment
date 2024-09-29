"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function contact() {
  const Router2=useRouter()
  return (
    <>
      <br/>
      <h1 className='text-3xl' color='blue'> This is Contact page</h1>
      <br/>
    <Link href="/about">About Link</Link>
    <br/>
    <Link href="/navbar">Navbar Link</Link>
    <br/>
    <Link href="/footer">Footer Link</Link>
<br/>

    <button onClick={()=> Router2.push('/navbar')}>Button Navbar </button>
    <br/>
    <button onClick={()=> Router2.push('/about')}>Button About </button>
    <br/>
    <button onClick={()=>Router2.push ('/footer')}>Button Footer</button>
    
    <br/>
      
    </>
  )
}

