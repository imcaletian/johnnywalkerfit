import Image from "next/image"
import Link from "next/link"

export default function Hero () {
    return (
        <div
        className=" w-screen overflow-hidden h-[28rem] md:h-[30rem] lg:h-[36rem] relative select-none"
        >
            <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/q_auto:best/v1679096329/johnny/instructing_plank_h3nb2q.jpg"
            width={3000}
            height={2000}
            alt="Johnny planking with client"
            className="brightness-50 h-full object-cover"
            />
            <div className="absolute z-10 bottom-[10%] flex gap-2 md:gap-3 lg:gap-4 flex-col mx-8 md:mx-6 lg:mx-8">
            <h1 className="text-4xl font-semibold md:text-6xl text-white">
                Meet Your <br/> Fitness Expert <br/> Johnny Walker
            </h1>
            <p className="text-white text-sm md:text-lg">
                Book a consultant session with Johnny.
            </p>
            <Link href="/" className="flex justify-center px-2 md:px-3 py-3 md:py- text-xs font-semibold shadow-md bg-white text-dark-2 rounded-md w-24 transition-colors hover:text-white hover:bg-accent-1">
                Learn More
            </Link>
            </div>
        </div>
    )
}