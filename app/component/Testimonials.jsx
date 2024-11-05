'use client'
import Slider from "react-slick";
import Image from "next/image";


export default function Testimonial () {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "flex justify-center items-center p-10",
        fade: true,
    };

    const testimonials = [
        {name: "Olivia", text: "Not only does Johnny create custom workouts to target my fitness goals and fit with my activity levels, but he also helps with and accommodates my pre-existing injuries. As someone who doesn’t love to workout, I truly look forward to my workouts with Johnny every week."},
        {name: "Justin", text: "Johnny provides a safe environment that is dynamic, challenging and tailored to my body goals. He focuses on continuous learning and incorporates new techniques and workouts that better support my body. Coming from someone who previously never enjoyed working out, I highly recommend Johnny to anyone who wants to embrace a healthier lifestyle."},
        {name: "Ivan", text: "Every workout session feels tailor-made, designed to bring out the best in me. Beyond the gym, Johnny’s expertise in nutrition has revolutionized my approach to healthy eating. His personalized meal plans are delightful and prove that nutrition can be both flavourful and exciting. For those seeking a friendly knowledgeable, and amusing gym trainer, Johnny is an unrivaled force."},
    ]

    return (
        <section className=" bg-accent-3 pt-16 md:h-auto md:p-20">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-white font-dela">Testimonials</h2>
            <Slider {...settings} >
            {testimonials.map((testimonials) => 
                        <div className=" text-off-white px-10 pt-5 font-semibold italic md:px-18 lg:px-24 xl:px-32">
                            <p>"{testimonials.text}"</p>
                            <p className=" text-right font-semibold">- {testimonials.name}</p>
                        </div>
            )}
            </Slider>
        </section>
    )
}