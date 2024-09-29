"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function Footer() {
  const Router3=useRouter()
  return (
    <>
      <br/>
      <h1 className='text-3xl' color='blue'> This is Footer page</h1>
      <br/>
    <Link href="/about">About Link</Link>
    <br/>
    <Link href="/navbar">Navbar Link</Link>
    <br/>
    <Link href="/contact">Contact Link</Link>
<br/>

    <button onClick={()=> Router3.push('/navbar')}>Button Navbar </button>
    <br/>
    <button onClick={()=> Router3.push('/about')}>Button About </button>
    <br/>
    <button onClick={()=>Router3.push ('/contact')}>Button Contact</button>
    
    <br/>
      
    </>
  )
}


