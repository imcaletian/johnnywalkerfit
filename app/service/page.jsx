import ServiceColumn from "../component/Columns"
import Header from "../component/Header"
import Image from "next/image"


export default function Service () {
    return (
        <div className="w-full">
            <Header>
                Service
            </Header>
            <div className="overflow-hidden h-[14rem] md:h-[20rem] lg:h-[34rem] ">
                <Image 
                src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1679446113/johnny/client-sumo_gvq9vy.jpg"
                width={2000}
                height={3000}
                alt="Johnny Walker standing in front of a mirror" 
                className="brightness-50 h-full object-cover object-center lg:object-top"/>
            </div>
            <ServiceColumn />
        </div>
    )
}
