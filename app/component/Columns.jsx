import Image from "next/image"
import Link from "next/link"
export default function ServiceColumn () {
    return (
      <div className="overflow-hidden w-screen h-[850px] md:h-[55vh] relative select-none max-w-[90rem]">
        <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1696740124/johnny/IMG_6812_bfk5ja.jpg" 
        height={2000} 
        width={1500}
        className=" brightness-[40%] object-cover h-full lg:object-[75%40%]" />
        <div className="absolute text-white top-0 p-[15%] w-full h-full">
          <div className="flex flex-col justify-center items-center gap-16 md:gap-20 md:flex-row md:justify-between md:items-center md:h-full">
            <div className="w-full flex flex-col items-center">
          <h1 className='text-3xl font-semibold py-4 font-dela text-center'>Personal Training</h1>
            <ul className='text-center'>
              <li className='py-2 font-light capitalize'>1-1, 2-1 and group training</li>
              <li className='py-2 font-light capitalize'>Strength and Conditioning for all levels</li>
              <li className='py-2 font-light capitalize'>Individually Tailored Workout Plans</li>
              
            </ul>
            <Link href="/" className="flex justify-center px-2 md:px-3 py-3 text-[0.8rem] font-semibold shadow-md bg-accent-1 text-dark-2 rounded-md w-24 transition-colors hover:text-white hover:bg-accent-2 mt-2">
                Learn More
            </Link>
            </div>
            <hr  className="float-left w-36 h-[1px] md:w-[3px] md:h-36 bg-white"></hr>
            <div className="w-full flex flex-col items-center">
          <h1 className='text-3xl font-semibold py-4 font-dela text-center'>Nutrition Coaching</h1>
            <ul className=' text-center'>
              <li className='py-2 font-light capitalize'>Personalized Meal Plans</li>
              <li className='py-2 font-light capitalize'>Nutrition Education</li>
              <li className='py-2 font-light capitalize'>Healthy Habit Formation</li>
            </ul>
            <Link href="/nutrition" className="flex justify-center px-2 md:px-3 py-3 text-[0.8rem] font-semibold shadow-md bg-accent-1 text-dark-2 rounded-md w-24 transition-colors hover:text-white hover:bg-accent-2 mt-2">
            Learn More
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    )
}