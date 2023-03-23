import Bio from "../bio";
import Header from "../component/Header";
import Image from "next/image";
export default function About () {
    return (
        <div>
            {/* <Header>
                About Me
            </Header> */}
            <Bio />

            <div className=" bg-off-white p-10">
                <h1 className=" text-accent-2 text-xl font-semibold text-center">Proudly Certified By</h1>
                <div className="flex items-center justify-around">
                <div>
                    <Image src="/ace.png" 
                    width={150}
                    height={150}
                    className="h-full object-cover"/>
                </div>
                <div>
                    <Image src="/nutrition.png" 
                    width={150}
                    height={150}
                    className="h-full object-scale-down"/>
                </div>
                </div>
            </div>
        </div>
    )
}