export default function ServiceColumn () {
    return (
        <div className='bg-accent-2 '>
        <section className='flex flex-col md:flex-row text-white md:justify-center border-accent-2 '>
          <div className=' text-center w-full md:w-1/2 p-10 md:hover:bg-gradient-to-b from-accent-4 to-accent-2 transition-all'>
            <h1 className='text-3xl font-semibold py-4 '>Personal Training</h1>
            <ul className='text-center'>
              <li className='py-2 font-light capitalize'>1-1 and 1-2 sessions</li>
              <li className='py-2 font-light capitalize'>Strength and Conditioning for all levels</li>
              <li className='py-2 font-light capitalize'>Tailored Workout Plans for personal needs</li>
            </ul>
          </div>
          <div className=' text-center w-full md:w-1/2 p-10 md:hover:bg-gradient-to-b from-accent-4 to-accent-2 transition-all '>
            <h1 className='text-3xl font-semibold py-4 '>Nutrition Coaching</h1>
            <ul className=' text-center'>
              <li className='py-2 font-light capitalize'>Personalized Meal Plans</li>
              <li className='py-2 font-light capitalize'>Nutrition Education</li>
              <li className='py-2 font-light capitalize'>Healthy Habit Formation</li>
            </ul>
          </div>
        </section>
      </div>
    )
}