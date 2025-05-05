import React from 'react'
import { Truck } from "lucide-react"


const Header = () => {
    return (
        <div className=''>
            <div>
                <p>Logo</p>
                <Truck size={60} />
            </div>
            <ul>
                <li className="item">home</li>
                <li className="item">track vehicle</li>
                <li className="item">about</li>
                <li className="item">contact us</li>
            </ul>
        </div>
    )
}

export default Header