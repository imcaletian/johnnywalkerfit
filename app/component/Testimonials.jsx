'use client'
import Slider from "react-slick";

export default function Testimonial () {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "px-2 mx-10 md:mx-10 lg:mx-60 lg:py-24",
        fade: true,
    };

    return (
        <section className=" bg-accent-3 py-7 md:h-auto">
            <h2 className="text-center my-8 text-2xl md:text-3xl font-semibold text-white font-dela">Testimonials</h2>
            <Slider {...settings} className="flex justify-center items-center mx-10 md:px-[10%]">
            <div className="bg-off-white text-accent-4 p-4 md:p-8 rounded-lg shadow-lg">
                <p>"“I have worked out for years and have been desperately trying to grow my glutes and build a booty. Nothing has really worked until I started training with Johnny the improvement on my glutes and associated muscle groups have been phenomenal. Not only does Johnny create custom workouts to target my fitness goals and fit with my activity levels, but he also helps with and accommodates my pre-existing injuries. As someone who doesn’t love to workout, I truly look forward to my workouts with Johnny every week.” 

!"</p>
                <p className=" text-right font-semibold">- Olivia</p>
            </div>
            <div className="bg-off-white text-accent-4 p-4 md:p-8 rounded-lg shadow-lg">
                <p >"“Johnny has been training me for nearly 3 years now and it is the most consistent I have been with workouts in my entire life. Johnny provides a safe environment that is dynamic, challenging and tailored to my body goals. He focuses on continuous learning and incorporates new techniques and workouts that better support my body. He has helped me achieve my goals which include strengthening my knees after past injuries and feeling stronger through my back with dynamic movements that have helped decrease chronic pain and improve my posture. Coming from someone who previously never enjoyed working out, I highly recommend Johnny to anyone who wants to embrace a healthier lifestyle.”"</p>
                <p className=" text-right font-semibold">- Justin</p>
            </div>
            <div className="bg-off-white text-accent-4 p-4 md:p-8 rounded-lg shadow-lg">
                <p>"“Johnny, the embodiment of Fitness finesse and nutritional wizardry, has been my guiding star for the past two years. His friendly nature and exceptional understanding of my goals have led to remarkable results. Not only does Johnny possess a physique that could rival Greek gods, but he also has an uncanny ability to anticipate my fitness desires with an almost psychic prowess. Every workout session feels tailor-made, designed to bring out the best in me. Beyond the gym, Johnny’s expertise in nutrition has revolutionized my approach to healthy eating. His personalized meal plans are delightful and prove that nutrition can be both flavourful and exciting. For those seeking a friendly knowledgeable, and amusing gym trainer, Johnny is an unrivaled force. He’s the fitness whisperer who will lead you on an extraordinary journey towards your goals. Trust me, he’s the secret ingredient you’ve been missing.  

"</p>
                <p className=" text-right font-semibold">- Ivan</p>
            </div>
            </Slider>
        </section>
    )
}