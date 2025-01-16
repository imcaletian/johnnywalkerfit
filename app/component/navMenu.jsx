'use client'
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
motion
import { Button } from "@nextui-org/button"
export default function NavMenu ({sideNav, setSideNav}) {
    
    return (
        <AnimatePresence>
            {sideNav && (
                <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{ duration : 0.5 }}
            className="absolute h-full w-full  bg-accent-4 z-50 bg-opacity-95">
                <div className="h-full">
                <Button color="primary" size="large" radius="sm" className=" max-w-24 m-3 absolute right-2 my-1/2 ">
                    <Link href="https://johnnywalkersfitness.youcanbook.me/" rel="noopener noreferrer" target="_blank" className="text-md font-semibold">
                    Schedule
                </Link>
                </Button>
                <button className="aspect-square w-8 rounded-md absolute top-0 left-0 font-bold text-2xl mt-3 ml-3 md:hidden" onClick={() => setSideNav(false)}>
                    <Image src="/icons/xmark-solid.svg" width={22} height={22} alt="cross" className="invert" />
                 </button>
                    <ul className="flex flex-col justify-center items-center h-full font-semibold divide-y-2 select-none divide-accent-1">
                        <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/"><li>Home</li></Link>
                        <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/service"><li>Services</li></Link>
                        <Link className="text-white text-center text-xl py-6 w-32" onClick={()=> setSideNav(false)} href="/contact"><li>Contact</li></Link>
                    </ul>
                <div className="w-full absolute bottom-[15%] h-20 flex flex-col items-center justify-center">
                    <Link href="https://instagram.com/johnnywalkersfitness/" onClick={()=> setSideNav(false)} className="aspect-square p-8" >
                    <Image src="/icons/instagram.svg" width={36} height={36} alt="solid" className="invert" />
                    </Link>
                    <p className="text-xl text-white font-dela text-center select-none">Johnny Walker's Fitness</p>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

// sideNav 
// ? `absolute h-screen w-screen overflow-hidden bg-accent-4 z-50 bg-opacity-95 opacity-100` 
// : `hidden opacity-0`