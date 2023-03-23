'use client'
import Slider from "react-slick";

export default function Testimonial () {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "mx-10 px-2 md:mx-44 lg:mx-60",
        fade: true,
    };

    return (
        <section className=" bg-gradient-to-b from-accent-2 via-accent-3 to-accent-4 py-10">
            <Slider {...settings}>
            <div className="bg-accent-1 text-white p-4 md:p-8 rounded-lg shadow-md">
                <p>"Johnny is an amazing coach! His customized workout plan helped me lose weight and build muscle!"</p>
                <p className=" text-right font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-accent-1 text-white p-4 md:p-8 rounded-lg shadow-md">
                <p >"I've been working with Johnny for six months now and have seen amazing results."</p>
                <p className=" text-right font-semibold">- Mike H.</p>
            </div>
            <div className="bg-accent-1 text-white p-4 md:p-8 rounded-lg shadow-md">
                <p>"Johnny is simply the best! His expertise in strength and conditioning has helped me reach new heights in my fitness journey."</p>
                <p className=" text-right font-semibold">- Emily C.</p>
            </div>
            </Slider>
        </section>
    )
}