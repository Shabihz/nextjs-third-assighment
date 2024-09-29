"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function About() {
  const Router1=useRouter()
  return (
    <>
      <br/>
      <h1 className='text-3xl' color='blue'> This is About page</h1>
      <br/>
    <Link href="/contact">Contact Link</Link>
    <br/>
    <Link href="/navbar">Navbar Link</Link>
    <br/>
    <Link href="/footer">Footer Link</Link>
<br/>

    <button onClick={()=> Router1.push('/navbar')}>Button Navbar </button>
    <br/>
    <button onClick={()=> Router1.push('/contact')}>Button contact </button>
    <br/>
    <button onClick={()=>Router1.push ('/footer')}>Button Footer</button>
    
    <br/>
      
    </>
  )
}


