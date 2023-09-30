// import React from 'react'

import { useState } from "react";
import { TInputOfTodo, TTodoObj } from "./MainTodo";


import SingleTodo from "./SingleTodo";


type TodoBodyProps = {
    todoContaintArr: TTodoObj[];
    setModalVisiable: Function;
    updateTodo(obj: TTodoObj): void;
    deleteTodo(obj: TInputOfTodo): void;
    upTodo(obj: TInputOfTodo): void;
    downTodo(obj: TInputOfTodo): void;
    makeFavirote(obj: TInputOfTodo): void;
    makeUnFavirote(obj: TInputOfTodo): void;
    readyForAllDelete(): void;
    removeReadyForAllDelete(): void;
    allDeleteTodo(): void;
}




const TodoBody = ({ todoContaintArr, setModalVisiable, updateTodo, deleteTodo, upTodo, downTodo, readyForAllDelete, removeReadyForAllDelete, allDeleteTodo , makeFavirote , makeUnFavirote }: TodoBodyProps) => {

    const [allDeleteBtn, setAllDeleteBtn] = useState(false)



    // console.log(props)

    return (
        <>
            <div className='w-full md:w-1/4 h-900 border-4 p-2 pb-12 rounded-2xl border-sky-200 relative  bg-white'  >

                <nav className=' flex justify-between '>

                    <i className="ri-menu-2-line text-sky-300 text-2xl hover:text-sky-600 hover:cursor-pointer hover:scale-110 transition-all"></i>

                    {/* <div className=' col-start-1'>1 Personal</div>
                        <div className=' col-start-3'>2 Professonal</div>
                        <div className=' col-start-5 '>3 All</div> */}

                    <span className='text-sky-300 text-2xl hover:text-sky-600 hover:scale-110 transition-all'>TODO</span>

                </nav>





                <div className='text-center my-4 h-full  overflow-y-auto overflow-x-hidden relative'>
                    {

                        (todoContaintArr && todoContaintArr.length > 0)

                            ? todoContaintArr.map((ele: TTodoObj, i) => {
                                return (
                                    <SingleTodo key={ele.id} todoContaintArr={todoContaintArr} ele={ele} index={i} updateTodo={updateTodo} deleteTodo={deleteTodo} upTodo={upTodo} downTodo={downTodo} makeFavirote={makeFavirote} makeUnFavirote={makeUnFavirote}></SingleTodo>
                                )

                            })
                            : <div className="w-full flex flex-col justify-center items-center">
                                {/* Skeleton code here ------> */}

                                <img className=" w-2/5 hover:scale-125 transition-all" src="https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png" alt="" />

                                <h1 className=" text-xl w-fit">Start Writing <span className="text-sky-300 text-2xl hover:text-sky-600 hover:scale-110 transition-all">TODOs</span></h1>
                                <h5 className=" text-sm">By clicking <span className="text-sky-300 text-lg hover:text-sky-600 hover:scale-110 transition-all">plus</span> button </h5>


                                <div className=' w-full h-22  my-4 py-1 px-2 border rounded-3xl shadow-lg bg-sky-50 hover:scale-105 hover:bg-white transition-all'></div>

                                <div className=' w-full h-22 my-4 py-1 px-2 border rounded-3xl shadow-lg bg-sky-50 hover:scale-105 hover:bg-white transition-all'></div>

                                <div className=' w-full h-22 my-4 py-1 px-2 border rounded-3xl shadow-lg bg-sky-50 hover:scale-105 hover:bg-white transition-all'></div>

                            </div>
                    }



                    {/* All Delete functionality */}

                    {

                        (todoContaintArr && todoContaintArr.length > 0)

                            ?

                            <div className="flex flex-wrap justify-center sm:flex-row-reverse">

                                {
                                    (allDeleteBtn) && <button className="mx-1 border rounded px-2 font-bold bg-red-400 hover:bg-red-700 hover:text-white transition-all" onClick={() => { allDeleteTodo(); setAllDeleteBtn(!allDeleteBtn) }}>All Delete</button>
                                }

                                <button
                                    className=" mx-1 border rounded px-2 bg-red-200 hover:bg-red-400 transition-all"
                                    onClick={() => { setAllDeleteBtn(!allDeleteBtn); allDeleteBtn ? removeReadyForAllDelete() : readyForAllDelete() }}
                                >{(allDeleteBtn) ? "Remove All Delete" : "Click to All Delete"}</button>

                            </div>

                            :
                            <button className=" w-1/4 h-5 border rounded px-2 bg-red-100 hover:bg-red-300 transition-all"></button>


                    }


                </div>





                <span
                    className='text-5xl text-sky-300 absolute right-3 bottom-3 z-10 scale-150 hover:text-sky-600 hover:cursor-pointer hover:scale-125 active:scale-110 transition-all'
                    onClick={() => { setModalVisiable(true) }}

                >
                    <i className="ri-add-circle-fill"></i>
                </span>

            </div >

        </>
    )
}

export default TodoBody