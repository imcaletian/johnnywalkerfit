import Image from "next/image"

export default function Header ({children}) {
    return (
        <section
        className="w-full select-none flex items-baseline justify-center absolute mx-4 z-20 top-20 "
        >
            {/* <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1679446113/johnny/client-sumo_gvq9vy.jpg"
            width={3000}
            height={2000}
            alt="Johnny planking with client"
            className="brightness-50 h-full object-cover"
            /> */}
            <h1 className="text-3xl font-semibold md:text-4xl text-white ">
                {children}
            </h1>
        </section>
    )
}