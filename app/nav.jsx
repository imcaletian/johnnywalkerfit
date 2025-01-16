"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavMenu from "./component/navMenu"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@nextui-org/button"
export default function Nav () {

    const [sideNav, setSideNav] = useState (false)

    const links = [
        {href: "/", label: "Home", key:1},
        {href: "/service", label: "Service", key:2},
        {href: "/contact", label: "Contact", key:3},
    ]
    const path = usePathname();

    return (
        <div>
        <NavMenu sideNav={sideNav} setSideNav={setSideNav}/>
        <nav className=" overflow-hidden flex flex-col md:flex-row md:py-4 gap-2 justify-between items-center md:px-6 lg:px-8 absolute z-10 w-full bg-transparent text-white max-w-[90rem]">
            <button className=" aspect-square w-8 rounded-md absolute top-0 left-0 font-bold text-2xl mt-3 ml-3 md:hidden " onClick={() => setSideNav(true)}>
                <Image src="/icons/bars-solid.svg" width={24} height={24} alt="solid" className="invert" />
             </button>
            <Link href="/" className="py-4">
                <h1 className="font-bold text-large md:text-2xl mb-2 font-dela">Johnny Walker's Fitness</h1>
            </Link>
            <div className="hidden md:flex gap-6 items-center">
                <ul className="flex gap-6 items-center">
                    {links.map((link) => (
                        <li key={link.key}>
                            <Link className="text-center relative" href={link.href}>
                                {link.href === path && (
                                <motion.span layoutId="underline" className="absolute left-0 top-full mt-1 block rounded-2xl h-[1px] w-full bg-white"/>
                                )}
                                {link.label}
                            </Link>
                        </li>
                    )) }
                <Button color="primary" size="large" radius="lg" className="w-24 h-11">
                <Link href="https://johnnywalkersfitness.youcanbook.me/" rel="noopener noreferrer" target="_blank" className="text-md font-semibold">
                Schedule
                </Link>
                </Button>
                </ul>
            </div>  
        </nav>
        </div>
    )
}