import Image from "next/image"
import Link from "next/link"

export default function Footer () {
    return (
        <footer className="relative md:static bg-accent-4 text-off-white flex flex-col md:flex-row gap-4 justify-between items-start px-20 py-10 text-cen md:px-20">
          <div>
            <h2 className="font-bold text-2xl mb-2 font-dela">Johnny Walker's Fitness</h2>
            <h2 className='font-semibold text-lg py-5 '>Location</h2>
            <p>555 W 8th Ave, Vancouver, BC V5Z 1C6</p>
            <div>
              <Link href="https://instagram.com/johnnywalkersfitness/" className=" aspect-square p-1" >
                <Image src="/icons/instagram.svg" width={36} height={36} alt="solid" className="invert" />
             </Link>
            </div>
          </div>
          <div className="flex-row">
            <div className="w-1/3 md:w-1/4 flex gap-4 md:gap-8 items-bottom">
              <Image src="/img/AP_Black.png" width={240} height={240} alt="AP" className="invert object-contain p-2" />
              <Image src="/nutrition.png" width={240} height={240} alt="Nutrition" className="object-contain m-2" />
            </div>
              <p className="text-xs">
                Website by Yuxing Tian Media
              </p>

          </div>
        </footer>
    )
}