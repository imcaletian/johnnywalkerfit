"use client"
import Script from "next/script"
import { useEffect } from "react"
export default function BookingWidget () {
    useEffect(()=> {
        const script = document.createElement('script');
        script.src="https://embed.youcanbook.me";
        script.async="true";
        script['data-content']="schedule"
        script['data-domain']="johnnywalkersfitness";
        document.getElementById('booking-section').appendChild(script)
    })
    return (
        <Script
        src="https://embed.youcanbook.me"
        async="true"
        data-domain="johnnywalkersfitness"
        data-content="schedule" 
        strategy="lazyOnload"
        />
    )
}