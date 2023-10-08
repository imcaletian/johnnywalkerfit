import Image from "next/image"
import Link from "next/link"

export default function Hero () {
    return (
        <div
        className=" w-screen overflow-hidden h-[80vh] md:h-[30rem] lg:h-[36rem] relative select-none"
        >
            <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1696740143/johnny/IMG_6822_xc0vzs.jpg"
            width={1500}
            height={1000}
            alt="Johnny training client with cable machine"
            className="brightness-50 object-cover h-full object-[32%] md:w-full lg:object-[75%15%]"
            />
            <div className="absolute z-10 bottom-[10%] flex gap-3 md:gap-3 md:text-right md:items-end md:right-10 lg:gap-4 flex-col mx-8 md:mx-6 lg:mx-8">
            <h1 className="text-[2.5rem] leading-tight font-semibold md:text-6xl text-white font-dela shadow-xl" >
                Meet Your <br/> Fitness Expert <br/> <span className="text-off-white">Johnny Walker</span>
            </h1>
            <p className="text-white text-sm md:text-lg">
                Book a consultant session with Johnny today.
            </p>
            <Link href="/" className="flex justify-center px-2 md:px-3 py-3 text-[0.8rem] font-semibold shadow-md bg-white text-dark-2 rounded-md w-24 transition-colors hover:text-white hover:bg-accent-1">
                Schedule
            </Link>
            </div>
        </div>
    )
}