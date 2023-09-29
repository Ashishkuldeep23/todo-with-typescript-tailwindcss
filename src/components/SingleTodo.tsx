// import React from 'react'

import { useState } from 'react'
import { TTodoObj } from './MainTodo'


type SingleToDoProps = {
    ele: TTodoObj;
    index : number ;
    todoContaintArr: TTodoObj[];
    updateTodo(obj: TTodoObj): void;
    deleteTodo(obj: TTodoObj): void;
    upTodo(obj: TTodoObj): void;
    downTodo(obj: TTodoObj): void;
}


const SingleTodo = ({todoContaintArr , ele, updateTodo, deleteTodo , index , downTodo , upTodo }: SingleToDoProps) => {


    const [readyToDelete, setReadyToDelete] = useState(ele.isDeletable)

    return (
        <>

            <div key={ele.id} className='my-4 py-1 px-2 border rounded-3xl shadow-lg bg-sky-50 hover:scale-105 hover:bg-white transition-all'>
                <h3 className={` font-bold text-lg ${readyToDelete && " line-through"}`} >{ele.heading}</h3>
                <p className={`text-left ${readyToDelete && " line-through"}`}>{ele.content}</p>
                <div className='flex justify-center flex-wrap'>
                    <div
                        className=' w-auto sm:w-1/2 px-2 border rounded-md mx-1 hover:bg-red-300 hover:text-white transition-all'
                        onClick={() =>setReadyToDelete(!readyToDelete)}
                    >{readyToDelete ? "Remove from Delete" : "Click to Delete"}</div>


                    {
                        !readyToDelete
                            ? <>
                                <button
                                    className='w-1/12 border rounded-md mx-1 hover:bg-blue-300 transition-all'
                                    onClick={() => updateTodo(ele)}
                                ><i className="ri-pencil-fill "></i></button>

                                <button 
                                    className='w-1/12 border rounded-md mx-1 hover:bg-teal-300 transition-all'
                                    onClick={()=>{ (index!==0) && upTodo(ele) } }
                                ><i className={`${index !== 0 ? "ri-arrow-up-double-line" : ""}`}></i></button>

                                <button 
                                    className='w-1/12 border rounded-md mx-1 hover:bg-green-300 transition-all'
                                    onClick={ ()=>{ (index !== todoContaintArr.length-1) && downTodo(ele) }}
                                ><i className={`${index !== todoContaintArr.length-1 ? "ri-arrow-down-double-line" : ""}`}></i></button>
                            </>

                            : <>

                                <button
                                    className='  sm:w-1/3 px-4 border rounded-md mx-1 bg-red-500 text-white font-bold hover:bg-red-800 transition-all'
                                    onClick={()=>deleteTodo(ele)}
                                >Delete</button>
                            </>
                    }





                </div>
            </div>

        </>
    )
}

export default SingleTodo