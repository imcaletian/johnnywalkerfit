'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { toast, Toaster} from "react-hot-toast"

export default function Contact () {

    const [data, setData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const router = useRouter ()
    

    const sendEmail = async (e) => {
      e.preventDefault();
      console.log(data)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if(response.status === 200) {
        setData({})
        console.log("success")
        toast.success(`Hey ${data.name}, your message was sent sucessfully!`)
        router.push('/')
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
                  <form className="flex flex-col items-center md:items-center gap-4 px-8 my-2" onSubmit={sendEmail} >
                      <input value={data.name} onChange={e => setData({...data, name: e.target.value})} type="text" placeholder="Name" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                      <input value={data.email} onChange={e => setData({...data, email: e.target.value})} type="email" placeholder="Email" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                      <textarea value={data.message} onChange={e => setData({...data, message: e.target.value})} type="text" className="w-full max-w-xs rounded-md px-4 py-2 h-24 shadow-md resize-none bg-orange-100 text-black" placeholder="Message" />
                      <div className="m-2 flex items-center gap-8">
                        <p>
                          I'm looking for:
                        </p>
                        <div className="flex gap-2">
                          <div>
                          <input type="checkbox" id="option1" name="option1" value="Training"/>
                          <label htmlFor="training">Personal Training</label>
                          </div>
                          <div>
                          <input type="checkbox" id="option2" name="option2" value="Nutrition"/>
                          <label htmlFor="training">Nutrition Coaching</label>
                          </div>
                        </div>
                      </div>
                      <button className=" bg-accent-1 px-4 py-2 rounded-md hover:bg-accent-4 shadow-md hover:border-gray-900" type="submit">Submit</button>
                  </form>
              </div>
          </div>
      </div>
  )

    }