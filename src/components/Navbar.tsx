// import React from 'react'

import { useState } from "react"

const Navbar = () => {


    const [navDivVisiable, setNavDivVisiable] = useState(false)

    return (
        <>

            <nav className=' flex justify-between relative '>

                <i
                    className="ri-menu-2-line text-sky-300 text-2xl hover:text-sky-600 hover:cursor-pointer hover:scale-110 transition-all"
                    onClick={() => setNavDivVisiable(!navDivVisiable)}
                ></i>

                <div
                    className={` w-full h-800 flex flex-col bg-teal-300 absolute p-2 rounded-md overflow-y-auto transition-all ${(!navDivVisiable) ? " right-full rotate-180 scale-50 -z-50" : "right-0 rotate-0 z-40 scale-100"} `}
                >
                    <button
                        className=" ml-auto mr-1 mt-1 border px-1 rounded font-bold text-white bg-red-600 hover:bg-red-900"
                        onClick={() => setNavDivVisiable(!navDivVisiable)}
                    >X</button>
                    <ul className="mb-3">
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                    </ul>

                    <div>
                       <h1>Dev Info</h1>
                    </div>

                    <button
                        className=" m-1 mt-auto border rounded font-bold text-white bg-red-600 hover:bg-red-900 uppercase"
                        onClick={() => setNavDivVisiable(!navDivVisiable)}
                    >Close</button>
                </div>

                {/* <div className=' col-start-1'>1 Personal</div>
                    <div className=' col-start-3'>2 Professonal</div>
                    <div className=' col-start-5 '>3 All</div> */}

                <span
                    className='text-sky-300 text-2xl hover:text-sky-600 hover:scale-110 transition-all'
                    onClick={() => setNavDivVisiable(!navDivVisiable)}
                >TODO</span>

            </nav>

        </>
    )
}

export default Navbar