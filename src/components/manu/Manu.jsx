import React from 'react'

const Manu = () => {
    return (
        <header className='fixed w-full z-50 bg-black backdrop:blur-sm px-4 py-10'>
            <div className='container mx-auto flex justify-between items-center '>
                <div>
                    <a href="#" className='text-4xl font-bold text-white'>Port <span className='text-purple-500'>folio </span>
                        <div className='flex gap-x-2'>
                            <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
                            <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                            <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        </div>
                    </a>

                </div>
                <div>
                    <ul className='text-white flex gap-x-10'>
                        <li className='text-lg font-semibold cursor-pointer hover:text-purple-500 relative
           after:absolute after:content-[""]
           after:top-7 after:left-0
           after:w-0 after:h-1 after:bg-purple-400 after:rounded-lg
           after:transition-all after:duration-500
           hover:after:w-full'>Home</li>
                        <li className='text-lg font-semibold cursor-pointer hover:text-purple-500 relative
           after:absolute after:content-[""]
           after:top-7 after:left-0
           after:w-0 after:h-1 after:bg-purple-400 after:rounded-lg
           after:transition-all after:duration-500
           hover:after:w-full'>About</li>
                        <li className='text-lg font-semibold cursor-pointer hover:text-purple-500 relative
           after:absolute after:content-[""]
           after:top-7 after:left-0
           after:w-0 after:h-1 after:bg-purple-400 after:rounded-lg
           after:transition-all after:duration-500
           hover:after:w-full'>Skills</li>
                        <li className='text-lg font-semibold cursor-pointer hover:text-purple-500 relative
           after:absolute after:content-[""]
           after:top-7 after:left-0
           after:w-0 after:h-1 after:bg-purple-400 after:rounded-lg
           after:transition-all after:duration-500
           hover:after:w-full'>Project</li>
                        <li className='text-lg font-semibold cursor-pointer hover:text-purple-500 relative
           after:absolute after:content-[""]
           after:top-7 after:left-0
           after:w-0 after:h-1 after:bg-purple-400 after:rounded-lg
           after:transition-all after:duration-500
           hover:after:w-full'>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Manu