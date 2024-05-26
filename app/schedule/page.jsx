'use client'

import Script from "next/script"
export default function Schedule () {
    return (
        <div className="">
            <Script
            src="https://embed.youcanbook.me"
            async="true"
            data-domain="johnnywalkersfitness"
            data-content="schedule" 
            strategy="lazyOnload"/>
        </div>
    )
}