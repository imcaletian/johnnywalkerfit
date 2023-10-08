import Image from "next/image";

const Introduction = () => {
    return (
        <div className=' bg-gray-400 text-center flex items-center text-accent-4'>
        <div className='p-10'>
        <h2 className='text-3xl md:text-4xl font-semibold  py-2 font-dela'>Kick Start Your Fitness Journey</h2>
        <div className="flex flex-col items-center md:mx-24 lg:flex-row pt-10 lg:py-10">
        <div className="w-60 mx-auto lg:w-80 ">
          <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1696803772/johnny/johnny_swaign.png" width={700} height={700} className=" object-cover rounded-full shadow-xl"/>
        </div>
        <p className=' md:text-lg py-4 md:py-6 lg:w-1/2'>
        Johnny is an ACE Certified Personal Trainer and Precision Nutrition Certified Nutrition Coach based in Vancouver, BC. Johnny specialize in tailoring workout and nutrition plans to help you reach your personal fitness goal. With a positive and collabroative approach, Johnny will help you incorporate fitness and nutrition into your day-to-day life. 
        </p>
        </div>
        </div>
      </div>
    )
}

export default Introduction