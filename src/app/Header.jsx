
import React from "react";

function Header() {
    return(
        <>
            <div className='w-screen py-6 px-5 lg:px-64 bg-[#252525] flex justify-between text-neutral-300'>
                <span className=' text-2xl font-extrabold'>
                    Agogo
                </span>
                
                <ul className='hidden md:flex items-center space-x-5 font-semibold '>
                <li className="hover:bg-[#202020]">
                    Contact
                </li>
                <li>
                    Setting
                </li>
                <li>
                    Help
                </li>
                </ul>

                {/* hamburger menu */}
                <button className='space-y-1 group md:hidden font-semibold'>
                <div className='w-6 h-1 bg-white'></div>
                <div className='w-6 h-1 bg-white'></div>
                <div className='w-6 h-1 bg-white'></div>

                <ul className='bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
                    <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                    Contact
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                    Sevice
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                    Help
                    </li>
                </ul>
                </button>
            </div>
        </>
    )
}
export default Header;