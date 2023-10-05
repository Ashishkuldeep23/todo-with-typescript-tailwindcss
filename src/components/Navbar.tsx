// import React from 'react'

import { useState, useContext } from "react"
import ThemeContext from "./ThemeContext"

const Navbar = () => {


    const [navDivVisiable, setNavDivVisiable] = useState(false)

    const theme = useContext(ThemeContext)

    return (
        <>

            <nav className=' flex justify-between relative '>

                <i
                    className={`ri-menu-2-line ${!theme ? "text-sky-500 " : " text-violet-500 "} text-2xl hover:text-sky-600 hover:cursor-pointer hover:scale-110 transition-all`}
                    onClick={() => setNavDivVisiable(!navDivVisiable)}
                ></i>

                {/* Menu div Starts here --> */}
                <div
                    className={` w-full h-800 flex flex-col ${!theme ? "bg-teal-300 " : " bg-green-300 "} absolute p-2 rounded-md overflow-y-auto duration-10 ${(!navDivVisiable) ? " right-full rotate-180 scale-50 -z-50" : "right-0 rotate-0 z-40 scale-100"} `}
                >
                    <button
                        className=" fixed top-2 right-2 px-5 ml-auto mr-1 mt-1 border rounded font-bold text-white bg-red-600 hover:bg-red-900"
                        onClick={() => setNavDivVisiable(!navDivVisiable)}
                    >X</button>

                    <h2 className=" text-2xl text-center font-bold" >Features are :</h2>

                    <ul className="mb-3  list-disc list-inside"  >
                        <li>Todo is used to  <strong>write down all the work that you want to do in the upcoming time</strong>.</li>
                        <li>This web app can be used as a <strong>normal notes app</strong> also.</li>
                        <li>Here users can <strong> create new Todo data</strong> , if data more than 0 it will <strong>automatically be visible</strong> to the user and if todo is created then the user <strong>can delete todo and also update</strong> todo.</li>
                        <li>Users <strong>can move places</strong> of todo by up or down key (if todo is <strong>not favorite or starred</strong> ). </li>
                        <li>Users can make <strong> todo favorite or starred</strong>, that todo will <strong>appear at the top alwaysappear at the top always</strong> and look in different color. And user <strong>not be able to move places</strong>.</li>
                        <li>
                            This <strong>web app is PWA</strong> means you can <strong>download this app as native application</strong> on your device (By <strong>clicking on the menu</strong> icon of the website <strong>there will be Add Home or Install App</strong>.)
                        </li>
                        <li>Best part of this web app is that the <strong>user can access this in offline mode</strong>. Also, <strong>if your internet data is off then you can access</strong> this web app and users can use features of this web app. <strong>(Try it once ,</strong> After Installing this will work well).</li>


                    </ul>

                    <div className=" text-center my-5 flex flex-col items-center">

                        <h2 className=" text-2xl text-center font-bold" >Dev info :</h2>

                        {/* <img className=" w-36 rounded-full bg-yellow-500" src="http://res.cloudinary.com/dlvq8n2ca/image/upload/v1694854527/kckqxyoamncconejcjxx.png" alt="" /> */}

                        <p className=" text-lg font-bold">I'm Ashish Kuldeep</p>
                        <p>Learning MERN Stack</p>
                        <p>See more in my portfolio : <a className=" underline" href="https://ashish-kuldeep-portfolio.vercel.app/" target="_blank">Click</a></p>
                        <img className=" w-36 rounded-full border" src="http://res.cloudinary.com/dlvq8n2ca/image/upload/v1694854527/kckqxyoamncconejcjxx.png" alt="" />
                    </div>

                    <div className=" text-center" >
                        <p>Please provide your feedback about this web app.</p>
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
                    className={`${!theme ? "text-sky-500 " : " text-violet-500 "}text-2xl hover:text-sky-600 hover:scale-110 transition-all`}
                    onClick={() => setNavDivVisiable(!navDivVisiable)}
                >TODO</span>

            </nav>

        </>
    )
}

export default Navbar