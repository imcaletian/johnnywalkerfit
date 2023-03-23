"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavMenu from "./component/navMenu"

export default function Nav () {
    
    const [sideNav, setSideNav] = useState (false)

    return (
        <div>
        <NavMenu sideNav={sideNav} setSideNav={setSideNav}/>
        <nav className="flex flex-col md:flex-row md:py-4 gap-2 justify-between items-center md:px-6 lg:px-8 absolute z-10 w-full bg-transparent text-white">
            <button className=" aspect-square w-8 rounded-md absolute top-0 left-0 font-bold text-2xl mt-3 ml-3 md:hidden" onClick={() => setSideNav(true)}>
                <Image src="/icons/bars-solid.svg" width={24} height={24} alt="" className="invert" />
             </button>
            <Link href="/" className="py-4">
                <h1 className="font-bold text-xl -mb-2">Johnny Walker's Fitness</h1>
            </Link>
            <div className="hidden md:block">
                <ul className="flex gap-6">
                    <Link className="border-b-2 border-b-transparent hover:border-b-white -mb-2 transition-all text-center" href="/service"><li>Service</li></Link>
                    <Link className="border-b-2 border-b-transparent hover:border-b-white -mb-2 transition-all text-center" href="/about"><li>About Johnny</li></Link>
                    <Link className="border-b-2 border-b-transparent hover:border-b-white -mb-2 transition-all text-center" href="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
        </div>
    )
}