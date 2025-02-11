import React from 'react'
import {
    Link
} from 'react-router-dom'

import { BiLogoGmail } from 'react-icons/bi';
import { FaRobot } from 'react-icons/fa';

export default function NavDrawer() {
    return (
        <div className='max-w-[240px] h-[100vh] w-full flex flex-col bg-theme-dark-black'>
            <div className="flex items-end gap-2 p-2">
                <img src='/logo512.png' className='h-10' />
                <h1 className='text-2xl font-semibold' > Aristotle AI</h1 >
            </div>
            <div className='flex flex-col text-md font-regular mt-4 h-full bg-gradient-to-b from-theme-dark-black from-0% to-theme-black text-gray-300'>
                <Link to={'/'} className='hover:bg-theme-dark-black hover:text-white px-4 pt-2'>
                    <div className="flex gap-4 items-center">
                        <BiLogoGmail size={20} />
                        <p>Gmail AI</p>
                    </div>
                </Link>
                <Link to={'/llmai_chatroom'} className='hover:bg-theme-dark-black hover:text-white px-4 pt-2'>
                    <div className="flex gap-4 items-center">
                        <FaRobot size={20} />
                        <p>LLM AI</p>
                    </div>
                </Link>
            </div>
        </div >
    )
}

