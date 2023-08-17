import Link from "next/link";
import React from 'react'
const Navbar = ()=>{
    return (
        <div className="navbar">
            <span className="logo">
                my-app
            </span>
            <div className="links">
            <Link href='#'>HomePage</Link>
            <Link href='#'>About</Link>
             <Link href='#'>Contact</Link>

             </div>
        </div>
    )
}
export default Navbar