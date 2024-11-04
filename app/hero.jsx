import Image from "next/image"
import Link from "next/link"
import {Button, ButtonGroup} from "@nextui-org/button"

export default function Hero () {
    return (
        <div
        className=" w-screen overflow-hidden h-[80vh] md:h-[30rem] lg:h-[36rem] relative select-none max-w-[90rem]"
        >
            <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1696740143/johnny/IMG_6822_xc0vzs.jpg"
            width={1500}
            height={1000}
            alt="Johnny training client with cable machine"
            className="brightness-50 object-cover h-full object-[32%] md:w-full lg:object-[75%15%]"
            />
            <div className="absolute px-2 z-10 bottom-[10%] flex gap-3 md:gap-3 md:text-right md:items-end md:right-10 lg:gap-4 flex-col mx-8 md:mx-6 lg:mx-8">
            <h1 className="text-4xl leading-tight font-semibold md:text-6xl text-white font-dela shadow-xl" >
                Kick Start <br/> Your Fitness <br/>Journey
            </h1>
            <p className="text-gray-200 text-sm md:text-lg ">
                Book your first session with Johnny Walker today!
            </p>
            <Button color="primary" size="large" radius="sm" className=" max-w-24 md:hidden">
                <Link href="https://johnnywalkersfitness.youcanbook.me/" rel="noopener noreferrer" target="_blank" >
                Schedule
                </Link>
            </Button>
            </div>
        </div>
    )
}