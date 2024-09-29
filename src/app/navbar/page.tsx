"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function Navbar() {
  const Router4=useRouter()
  return (
    <>
      <br/>
      <h1 className='text-3xl' color='blue'> This is Footer page</h1>
      <br/>
    <Link href="/about">About Link</Link>
    <br/>
    <Link href="/footer">Footer Link</Link>
    <br/>
    <Link href="/contact">Contact Link</Link>
<br/>

    <button onClick={()=> Router4.push('/footer')}>Button Footer </button>
    <br/>
    <button onClick={()=> Router4.push('/about')}>Button About </button>
    <br/>
    <button onClick={()=>Router4.push ('/contact')}>Button Contact</button>
    
    <br/>
      
    </>
  )
}