"use client"
import Script from "next/script"

export default function Booking () {
    return (
        <>
            <Script
                src="https://embed.youcanbook.me"
                async="true"
                data-domain="cale-8"
                data-content="all">
            </Script>
        </>
    )
}