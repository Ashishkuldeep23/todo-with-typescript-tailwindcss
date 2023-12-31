// import React from 'react'

import { useState, useContext } from "react";
import { TInputOfTodo, TTodoObj } from "./MainTodo";


import Navbar from "./Navbar";
import SingleTodo from "./SingleTodo";
import ThemeContext from "./ThemeContext";



// type TodoBodyProps = {
//     setModalVisiable: Function;
//     readyForAllDelete(): void;
//     removeReadyForAllDelete(): void;
//     allDeleteTodo(): void;
// }



export interface ITodoPrpsGenral {

    todoContaintArr: TTodoObj[];
    updateTodo(obj: TTodoObj): void;
    deleteOneTodo(obj: TInputOfTodo): void;
    upTodo(obj: TInputOfTodo): void;
    downTodo(obj: TInputOfTodo): void;
    makeFavirote(obj: TInputOfTodo): void;
    makeUnFavirote(obj: TInputOfTodo): void;

}


interface TodoBodyProps extends ITodoPrpsGenral {
    setModalVisiable: Function;
    readyForAllDelete(): void;
    removeReadyForAllDelete(): void;
    allDeleteTodo(): void;
}




const TodoBody = ({ todoContaintArr, setModalVisiable, updateTodo, deleteOneTodo, upTodo, downTodo, readyForAllDelete, removeReadyForAllDelete, allDeleteTodo, makeFavirote, makeUnFavirote }: TodoBodyProps) => {

    const [allDeleteBtn, setAllDeleteBtn] = useState<boolean>(false)

    const theme = useContext(ThemeContext)



    // console.log(props)

    return (
        <>
            <div className={`w-full md:w-1/3 h-900 border-4 p-2 pb-12 rounded-2xl overflow-hidden ${!theme ? "border-sky-300 " : " border-violet-400"} relative ${!theme ? "bg-white" : " bg-black"} `}  >

                <Navbar />

                <div className='text-center mb-4 h-full  overflow-y-auto overflow-x-hidden relative scroll-mx-3.5' id="todo_main_holder">
                    {

                        (todoContaintArr && todoContaintArr.length > 0)

                            ? todoContaintArr.map((ele: TTodoObj, i) => {
                                return (
                                    <SingleTodo key={ele.id} todoContaintArr={todoContaintArr} ele={ele} index={i} updateTodo={updateTodo} deleteOneTodo={deleteOneTodo} upTodo={upTodo} downTodo={downTodo} makeFavirote={makeFavirote} makeUnFavirote={makeUnFavirote}></SingleTodo>
                                )

                            })
                            : <div className={`w-full flex flex-col justify-center items-center ${!theme ? " text-black " : " text-white "} `}>
                                {/* Skeleton code here ------> */}

                                <img className="animate__animated  animate__fadeInDown w-2/5 hover:scale-125 transition-all" src="https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png" alt="" />

                                <div className=" animate__animated animate__fadeInUp text-center">

                                    <h1 className=" text-xl">Start Writing <span className={`${!theme ? "text-sky-500 " : " text-violet-500 "} text-2xl hover:text-sky-600 hover:scale-110 transition-all`}>TODOs</span></h1>
                                    <h5 className=" text-sm">By clicking <span className={` ${!theme ? "text-sky-500 " : " text-violet-500 "} text-lg hover:text-sky-600 hover:scale-110 transition-all `}>Plus</span> button </h5>
                                    <h5 className=" text-sm">OR press<span className={` ${!theme ? "text-sky-500 " : " text-violet-500 "} text-lg hover:text-sky-600 hover:scale-110 transition-all `}> CTRL + B </span> from keyboard </h5>
                                </div>


                                <div className={` animate__animated animate__zoomIn w-full h-22  my-4 py-1 px-2  rounded-3xl shadow-lg ${!theme ? "bg-sky-50 " : " bg-sky-950 "}   ${!theme ? "hover:bg-white " : " hover:bg-emerald-800 "} hover:scale-102 transition-all`}></div>

                                <div className={` animate__animated animate__zoomIn w-full h-22  my-4 py-1 px-2  rounded-3xl shadow-lg ${!theme ? "bg-sky-50 " : " bg-sky-950 "}   ${!theme ? "hover:bg-white " : " hover:bg-emerald-800 "} hover:scale-102 transition-all`}></div>

                                <div className={` animate__animated animate__zoomIn w-full h-22  my-4 py-1 px-2  rounded-3xl shadow-lg ${!theme ? "bg-sky-50 " : " bg-sky-950 "}   ${!theme ? "hover:bg-white " : " hover:bg-emerald-800 "} hover:scale-102 transition-all`}></div>

                            </div>
                    }



                    {/* All Delete functionality */}

                    {

                        (todoContaintArr && todoContaintArr.length > 0)

                            ?

                            <div className={`flex flex-wrap justify-center sm:flex-row-reverse ${todoContaintArr.length > 5 ? " mt-24 " : " mt-8 "} `}>

                                {
                                    (allDeleteBtn || todoContaintArr[todoContaintArr.length - 1].isDeletable) && <button className=" animate__animated animate__rubberBand mx-1 border mb-2 rounded px-2 font-bold bg-red-400 hover:bg-red-700 hover:text-white transition-all" onClick={() => { allDeleteTodo(); setAllDeleteBtn(!allDeleteBtn) }}>All Delete</button>
                                }

                                {/* Now below and above btn have two dependancy 1st is allDeleteBtn allDeleteBtn and 2nd one is isdelete value of last element of todo. */}

                                <button
                                    className=" animate__animated animate__rubberBand mx-1 mb-2  border rounded px-2 bg-red-200 hover:bg-red-400 transition-all"
                                    onClick={() => { setAllDeleteBtn(!allDeleteBtn); (allDeleteBtn || todoContaintArr[todoContaintArr.length - 1]?.isDeletable) ? removeReadyForAllDelete() : readyForAllDelete() }}
                                >{(allDeleteBtn || todoContaintArr[todoContaintArr.length - 1].isDeletable) ? "Remove All Delete" : "Click to All Delete"}</button>

                            </div>

                            :
                            <button className="animate__animated animate__rubberBand w-1/4 h-5 border rounded px-2 bg-red-100 hover:bg-red-300 transition-all"></button>


                    }


                </div>





                <span
                    className={` animate__animated  animate__heartBeat animate__slow animate__repeat-2 text-5xl ${!theme ? "text-sky-500 " : " text-violet-500 "} absolute right-4 bottom-5 z-10 scale-150 hover:text-sky-600 hover:scale-125 active:scale-110 transition-all`}
                    onClick={() => { setModalVisiable(true) }}

                >
                    <i className="ri-add-circle-fill"></i>
                </span>

            </div >

        </>
    )
}

export default TodoBody