import React from 'react'
import { Truck } from "lucide-react"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='flex items-center justify-around p-4 text-white bg-blue-800 capitalize'>
            <div className='flex justify-center items-center gap-2'>
                <Truck size={50} />
                <p className='text-2xl'></p>
            </div>
            <ul className='flex gap-8'>
                <li>home</li>
                <li>track</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
            <Link className='px-4 py-2 outline-2 hover:bg-fuchsia-50 hover:text-black rounded-[10px]'>Login</Link>
        </div>
    )
}

export default Header