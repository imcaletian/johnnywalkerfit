"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavMenu from "./component/navMenu"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
export default function Nav () {
    
    const [sideNav, setSideNav] = useState (false)

    const links = [
        {href: "/", label: "Home"},
        {href: "/service", label: "Service"},
        // {href: "/about", label: "About Johnny"},
        {href: "/contact", label: "Contact"},
    ]
    const path = usePathname();

    return (
        <div>
        <NavMenu sideNav={sideNav} setSideNav={setSideNav}/>
        <nav className="flex flex-col md:flex-row md:py-4 gap-2 justify-between items-center md:px-6 lg:px-8 absolute z-10 w-full max-w-[1280px] bg-transparent text-white">
            <button className=" aspect-square w-8 rounded-md absolute top-0 left-0 font-bold text-2xl mt-3 ml-3 md:hidden " onClick={() => setSideNav(true)}>
                <Image src="/icons/bars-solid.svg" width={24} height={24} alt="" className="invert" />
             </button>
            <Link href="/" className="py-4">
                <h1 className="font-bold text-xl mb-2 font-dela">Johnny Walker's Fitness</h1>
            </Link>
            <div className="hidden md:flex gap-6 items-center">
                <ul className="flex gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link className="text-center relative" href={link.href}>
                                {link.href === path && (
                                <motion.span layoutId="underline" className="absolute left-0 top-full mt-1 block rounded-2xl h-[1px] w-full bg-white"/>
                                )}
                                {link.label}
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
        </div>
    )
}