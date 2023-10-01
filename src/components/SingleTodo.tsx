// import React from 'react'

import { useState } from 'react'
import { TTodoObj } from './MainTodo'

import { ITodoPrpsGenral } from "./TodoBody"


// type SingleToDoProps = {
//     ele: TTodoObj;
//     index: number;
//     todoContaintArr: TTodoObj[];
//     updateTodo(obj: TTodoObj): void;
//     deleteOneTodo(obj: TTodoObj): void;
//     upTodo(obj: TTodoObj): void;
//     downTodo(obj: TTodoObj): void;
//     makeFavirote(obj: TTodoObj): void;
//     makeUnFavirote(obj: TTodoObj): void;
// }


// // // Means we can use extends keyword and use it into improted interfaces also ( previously using above ) --->
interface SingleToDoProps extends ITodoPrpsGenral{
    ele: TTodoObj;
    index: number;
}


const SingleTodo = ({ todoContaintArr, ele, updateTodo, deleteOneTodo, index, downTodo, upTodo, makeFavirote, makeUnFavirote }: SingleToDoProps) => {


    const [readyToDelete, setReadyToDelete] = useState(ele.isDeletable);

    function randomColorOfTailwind() {

        let colors = [
            "bg-green-400",
            "bg-red-400",
            "bg-yellow-400",
            "bg-blue-400",
            "bg-slate-400",
            "bg-orange-400",
            "bg-lime-400",
            "bg-emerald-400",
            "bg-indigo-400",
        ]

        return colors[Math.floor(Math.random() * colors.length)]
    }


    return (
        <>

            <div key={ele.id} className=' bg my-4 py-1 px-2 border rounded-3xl shadow-lg bg-sky-50 hover:scale-102 hover:bg-white transition-all'>
                <div className={`flex justify-between items-center font-bold text-lg ${(ele.isDeletable || readyToDelete) && " line-through"}`} >
                    {/* Here Line through on Todo is depended on two state variables (i don't know good way or bad way) one is readyToDelete on singleTodo component level and 2nd id  ele.isDeletable value which is part of todoContainetArr state variable on root level of todo project.*/}
                    <span className={` w-3 h-3 ${randomColorOfTailwind()} rounded-full text-xs text-white flex justify-center items-center`}>{index+1}</span>
                    <p className=' capitalize'>{ele.heading}</p>
                    <button
                        className={`${ele.isFav ? 'text-yellow-400 hover:scale-110 active:scale-50 transition-all' : ` text-slate-400 hover:text-sky-300 hover:scale-110  transition-all `}  `}
                        onClick={() => { (ele.isFav) ? makeUnFavirote(ele) : makeFavirote(ele) }}
                    ><i className="ri-star-fill"></i></button>
                </div>
                <p className={`text-left ${(ele.isDeletable || readyToDelete) && " line-through"}`}>{ele.content}</p>
                <div className='flex justify-center flex-wrap'>
                    <div
                        className=' w-auto sm:w-1/2 px-2 border rounded-md mx-1 hover:bg-red-300 hover:text-white transition-all'
                        onClick={() => setReadyToDelete(!readyToDelete)}
                    >{readyToDelete ? "Remove from Delete" : "Click to Delete"}</div>


                    {
                        !readyToDelete
                            ? <>
                                <button
                                    className='w-1/12 border rounded-md mx-1 hover:bg-blue-300 transition-all'
                                    onClick={() => (!ele.isDeletable) && updateTodo(ele)}
                                ><i className="ri-pencil-fill "></i></button>

                                <button
                                    className='w-1/12 border rounded-md mx-1 hover:bg-teal-300 transition-all'
                                    onClick={() => { (index !== 0) && (!ele.isDeletable  && !ele.isFav) && upTodo(ele) }}
                                ><i className={`${index !== 0 ? "ri-arrow-up-double-line" : "ri-close-circle-line"}`}></i></button>

                                <button
                                    className='w-1/12 border rounded-md mx-1 hover:bg-green-300 transition-all'
                                    onClick={() => { (index !== todoContaintArr.length - 1) && (!ele.isDeletable  && !ele.isFav) && downTodo(ele) }}
                                ><i className={`${index !== todoContaintArr.length - 1 ? "ri-arrow-down-double-line" : "ri-close-circle-line"}`}></i></button>
                            </>

                            : <>

                                <button
                                    className='  sm:w-1/3 px-4 border rounded-md mx-1 bg-red-500 text-white font-bold hover:bg-red-800 transition-all'
                                    onClick={() => deleteOneTodo(ele)}
                                >Delete</button>
                            </>
                    }





                </div>
            </div>

        </>
    )
}

export default SingleTodo