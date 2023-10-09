'use client'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
motion
export default function NavMenu ({sideNav, setSideNav}) {
    return (

        <motion.div layout 
        className={
             sideNav 
             ? `absolute h-screen w-screen overflow-hidden bg-accent-4 z-50 bg-opacity-95  opacity-100` 
             : `hidden opacity-0 `}>
            <div className="h-full">
            <button className="aspect-square w-8 rounded-md absolute top-0 left-0 font-bold text-2xl mt-3 ml-3 md:hidden" onClick={() => setSideNav(false)}>
                <Image src="/icons/xmark-solid.svg" width={22} height={22} alt="" className="invert" />
             </button>
                <ul className="flex flex-col justify-center items-center h-full font-semibold divide-y-2 divide-accent-1">
                    <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/service"><li>Services</li></Link>
                    {/* <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/about"><li>About Johnny</li></Link> */}
                    <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </motion.div>
    )
}