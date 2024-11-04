import Image from "next/image";

const OnlineTraining = () => {
    return (
        <div className="overflow-hidden w-screen h-[850px] md:h-[55vh] relative select-none max-w-[90rem]">
        <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1730751596/johnny/IMG_6833_kkzmps.jpg" 
        height={2000} 
        width={1500}
        className=" brightness-[40%] object-cover h-full lg:object-[75%40%]" />
        <div className="absolute text-white top-0 p-[15%] w-full h-full">
        </div>
      </div>
    )
}

export default OnlineTraining