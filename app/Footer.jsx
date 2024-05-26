import Image from "next/image"
import Link from "next/link"

export default function Footer () {
    return (
        <footer className="relative md:static bg-accent-4 text-off-white grid md:grid-flow-col gap-4 justify-evenly p-10  ">
          <div>
            <h2 className="font-bold text-xl mb-2 font-dela">Johnny Walker's Fitness</h2>
            <h2 className='font-semibold text-lg py-5 '>Location</h2>
            <p>555 W 8th Ave, Vancouver, BC V5Z 1C6</p>
            <div>
              <Link href="https://instagram.com/johnnywalkersfitness/" className=" aspect-square p-1" >
                <Image src="/icons/instagram.svg" width={36} height={36} alt="solid" className="invert" />
             </Link>
            </div>
            <p className="text-xs">
              Website by Yuxing Tian Media
            </p>
          </div>
          {/* <div className="w-2/3 md:w-1/2">
            <h2 className='font-semibold text-lg py-5 '>Location</h2>
            <p>555 W 8th Ave, Vancouver, BC V5Z 1C6</p>
          </div> */}
        </footer>
    )
}