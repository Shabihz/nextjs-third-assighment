"use client";
 
import { useRouter } from "next/navigation";
import React from "react";
import Card from "./component/card"

import Link from "next/link";

    export default function Home() {
  const Router = useRouter() 
    
   return(
    <>
      <br/>
    <h1 className="text-3xl">This is Homepage</h1>
    <br/>
    <Link href="/about">About Link</Link>
    <br/>
    <Link href="/contact">Contact Link</Link>
    <br/>
    <Link href="/navbar">Navbar Link</Link>
    <br/>
    <Link href="/footer">Footer Link</Link>
  <br/>
    <button onClick={()=> Router.push("/about")}><h1 color="blue" >Button About</h1></button>
    <br/>
    <button onClick={()=> Router.push('/navbar')}><h1>Button Navbar</h1> </button>
    <br/>
    <button onClick={()=> Router.push('/contact')}><h1>Button contact</h1> </button>
    <br/>
    <button onClick={()=>Router.push ('/footer')}><h1>Button Footer</h1></button>
    
    <br/>

    <br/>
    <Card Name="Ani" RollNo = "12345"></Card>
    <br/>
    <Card Name="Zain" RollNo = "45679"></Card>

    </>
  )
  
  
  
  
  }

  
