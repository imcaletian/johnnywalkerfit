import Image from "next/image";

export default function Bio () {
    return (
        <div className="w-full h-full  bg-accent-2 overflow-hidden flex flex-col md:flex-row items-center">
            <div className=" overflow-hidden h-[32rem] md:h-[45rem] md:w-[60rem] ">
                <Image 
                src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1679532882/johnny/bicep_curl_yl94nw.jpg"
                width={2000}
                height={3000}
                alt="Johnny Walker standing in front of a mirror" 
                className=" brightness-50 h-full object-cover object-top"/>
            </div>
            <div className="text-md md:h-full text-white w-96 md:w-full  p-8 rounded-md text-center flex justify-center items-center absolute md:static top-36 bg-accent-4 bg-opacity-75 shadow-lg">
                <p>I'm Johnny Walker, a Vancouver-based ACE-certified personal trainer and nutrition coach. Passionate about fitness, I create customized workout plans and provide expert nutrition advice to help you reach your goals. Emphasizing discipline and positivity, I'll guide you on your journey to a healthier lifestyle. Let's get started!</p>
            </div>
        </div>
    )
}