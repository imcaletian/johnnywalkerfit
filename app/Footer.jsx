export default function Footer () {
    return (
        <footer className=" bg-accent-4 text-off-white flex items-center gap-4 justify-evenly flex-col p-10 md:flex-row md:items-start ">
          <div className="w-2/3 md:w-1/2">
            <h2 className='font-semibold text-lg py-5'>Contact</h2>
            <a href='mailto:johndavidwalker@hotmail.com' className='hover:color-accent-1 transition-colors'>johndavidwalker@hotmail.com</a>
            <p>778-867-5646</p>
          </div>
          <div className="w-2/3 md:w-1/2">
            <h2 className='font-semibold text-lg py-5 '>Office Hour</h2>
            <p>Monday - Saturday</p>
            <p>10:00 AM - 6:00 PM</p>
            <p className='text-sm font-thin'>Photoshoot times vary depends on projects.</p>
          </div>
          <div className="w-2/3 md:w-1/2">
            <h2 className='font-semibold text-lg py-5 '>Location</h2>
            <p>Vancouver, BC</p>
          </div>
        </footer>
    )
}