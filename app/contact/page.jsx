'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { toast, Toaster} from "react-hot-toast"

export default function Contact () {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [message, setMessage] = useState ('')
    const router = useRouter()


    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch ('/api/contact', {
                method: "POST",
                body: JSON.stringify({
                    name, 
                    email, 
                    message,
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            toast.success('Submission Succeeded! I Will Be In Touch ASAP!')
            setName('')
            setEmail('')
            setMessage('')
            router.push('/')
        } catch (error) {
            console.error("err", error)
            toast.error("Submission Failed, Please Try Again Later")
        }

    }
    return(
        <div className="bg-accent-2 flex flex-col md:flex-row md:h-[48rem] items-center text-white" >
            <div className="bg-slate-600 md:block md:w-1/2 md:h-full lg:w-1/2">
            <Image src="https://res.cloudinary.com/dtsllu9jj/image/upload/v1696740146/johnny/IMG_6825_gkphgf.jpg"
                height="1200"
                width={1000}
                className="object-cover h-full object-top"
                alt="placeholder"
                />
            </div>
            <div className="h-full md:w-1/2 lg:w-[40%] mx-auto py-12 bg-gradient-to-b from-transparent via-accent-2 to-accent-4 md:static md:bg-gradient-to-b md:from-accent-2 md:to-accent-2 top-32">
                <div className="p-8 mb-3 text-center pt-32">
                    <p className="text-center md:h-32">Are you ready to start reaching for your fitness and health goals? Feel free to leave Johnny your goals and we can go from there! </p>
                </div>
                <div>
                    <form className="flex flex-col items-center md:items-center gap-4 px-8 my-2" onSubmit={onSubmit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full max-w-xs rounded-md px-4 py-2 h-24 shadow-md resize-none bg-orange-100 text-black" placeholder="Message" />
                        <button className=" bg-accent-1 px-4 py-2 rounded-md hover:bg-accent-4 shadow-md hover:border-gray-900" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}