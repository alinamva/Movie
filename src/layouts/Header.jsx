import React, {useState} from 'react'
import { Link } from 'react-router-dom';



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    
    <nav className="flex items-center flex-wrap p6 gap-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">

    </div>
    <div className="block lg:hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
        >
            <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
        </button>
    </div>
    <div
        className={`w-full grid gap-4 px-20 py-5 flex-grow justify-end lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
    >
            <div className='bg-purple-900 rounded p-3 duration-200 hover:bg-purple-500 cursor-pointer'>
                <Link to="/wishlist" className='text-white'>Wishlist</Link>
            </div>


    </div>
</nav>
  )
}
