import { useState, useEffect } from 'react'

import '../index.css'
import ModalForInpt from './ModalForInpt'
import TodoBody from './TodoBody'


import { v4 as uuidv4 } from "uuid";

import ThemeContext from './ThemeContext';


export interface TTodoObj {
  id: string | number;
  heading: string;
  content: string;
  isDeletable?: boolean;
  isFav?: boolean;
}


export type TInputOfTodo = {
  heading: string;
  content: string;
  id: string | number;
  isFav?: boolean;
}




// let todoContaintArr: TTodoObj[] = [
//   { id: "1", heading: "I'm todo 1 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false , isFav : false },
//   { id: "2", heading: "I'm todo 2 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false , isFav : false },
//   { id: "3", heading: "I'm todo 3 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false , isFav : false },
//   // { id: "4", heading: "I'm todo 4 Heading", content: "Content Content Content Content Content Content Content Content" },
//   // { id: "5", heading: "I'm todo 4 Heading", content: "Content Content Content Content Content Content Content Content" },
//   // { id: "6", heading: "I'm todo 4 Heading", content: "Content Content Content Content Content Content Content Content" },
//   // { id: "7", heading: "I'm todo 4 Heading", content: "Content Content Content Content Content Content Content Content" },
// ]


const MainTodo = () => {



  const [todoArr, setTodoArr] = useState<TTodoObj[]>([])     // // // Previously used todoContaintArr as initial data.

  const [modalVisiable, setModalVisiable] = useState<boolean>(false)

  // // // Below two var for update todo --->
  const [updatingTodo, setUpdatingTodo] = useState<boolean>(false)

  let initialInputValues: TInputOfTodo = { id: "", heading: "", content: "", isFav: false }
  const [input, setInput] = useState<TInputOfTodo>(initialInputValues)


  const [themeMode, setThemeMode] = useState<boolean>(false)




  // function showWrittingPanel() {
  //   return
  // }  


  // // // functions used in todo features are ------->

  function addNewTodo(obj: TInputOfTodo) {

    // setTodoArr([...todoArr, { ...obj, id: todoArr.length + 1 , isDeletable: false, isFav: false }])
    setTodoArr([...todoArr, { ...obj, id: uuidv4(), isDeletable: false, isFav: false }])

  }

  function updateTodo(obj: TInputOfTodo) {

    // console.warn(JSON.stringify(obj))
    setModalVisiable(true)
    setUpdatingTodo(true)
    setInput({ id: obj.id, heading: obj.heading, content: obj.content, isFav: obj.isFav })
  }

  function actualToDoUpadateFunction(obj: TInputOfTodo) {

    let arr = [...todoArr]
    let findIndex = arr.findIndex((e) => { return e.id === obj.id })
    arr.splice(findIndex, 1, input)

    setTodoArr(arr)

    // // Back to normal all ------>
    setModalVisiable(false)
    setUpdatingTodo(false)
    setInput(initialInputValues)

  }

  function deleteOneTodo(obj: TInputOfTodo) {

    // alert("cl")

    setTodoArr(todoArr.filter((el: TInputOfTodo) => { return el.id !== obj.id }))

    // upadateIDS(obj.id)
  }

  function upTodo(obj: TInputOfTodo) {
    // alert("up")

    let findIndex = todoArr.findIndex((ele) => { return obj.id === ele.id })
    // console.log(findIndex)

    // // // Below if to privent fav list (Mtlb agr jo index aya hai uske uper wala element in isFav true ho to yahi se return kr do element uper mth le jao.)
    if (todoArr[findIndex - 1].isFav) return console.warn("Can't up , fav is present just above this element.");

    // // // Swap to values ---->
    let arr = [...todoArr]
    let currentItem = arr[findIndex]
    arr[findIndex] = arr[findIndex - 1]

    arr[findIndex - 1] = currentItem


    // console.log(arr)

    setTodoArr(arr)
  }

  function downTodo(obj: TInputOfTodo) {
    // alert("Down")


    let findIndex = todoArr.findIndex((ele) => { return obj.id === ele.id })

    // console.log(findIndex)




    let arr = [...todoArr]
    let currentItem = arr[findIndex]
    arr[findIndex] = arr[findIndex + 1]

    arr[findIndex + 1] = currentItem


    // console.log(arr)

    setTodoArr(arr)


  }

  function readyForAllDelete() {
    let arr = todoArr.map((ele) => { return { ...ele, isDeletable: true } })
    setTodoArr(arr)
    // console.log(todoArr)
  }

  function removeReadyForAllDelete() {
    let arr = todoArr.map((ele) => { return { ...ele, isDeletable: false } })
    setTodoArr(arr)
    console.log(todoArr)
  }

  function allDeleteTodo() {

    // // We need clean localhost ---->
    localStorage.removeItem("todoData2023")
    setTodoArr([])
  }

  function makeFavirote(obj: TInputOfTodo) {

    // alert("Clicked")
    // console.log(obj)


    let arr = [...todoArr]

    let index = arr.findIndex((el) => { return el.id === obj.id })     // // // Finded element

    arr.splice(index, 1)    // // // Remove original or previous then added new with is fav true.

    arr.unshift({ ...obj, isFav: true })

    setTodoArr(arr)   // // // Now set the arr.

  }

  function makeUnFavirote(obj: TInputOfTodo) {

    let arr = [...todoArr]

    let index = arr.findIndex((el) => { return el.id === obj.id })     // // // Finded element

    arr.splice(index, 1)    // // // Remove original or previous then added new with is fav true.

    arr.push({ ...obj, isFav: false })

    setTodoArr(arr)   // // // Now set the arr.


  }



  // // // We can use tow useEffect in our project.

  useEffect(() => {
    if (todoArr.length !== 0) {
      localStorage.setItem("todoData2023", JSON.stringify(todoArr))
    }
  }, [todoArr])


  useEffect(() => {

    let getTodoData = localStorage.getItem("todoData2023")
    // console.log(getTodoData)

    if (getTodoData) {
      setTodoArr(JSON.parse(getTodoData))
    } else {
      setTodoArr([])
    }

  }, [])






  return (
    <>
      <ThemeContext.Provider value={themeMode}>

        <div className={`w-full min-h-screen p-3 ${themeMode ? "bg-sky-700 " : " bg-violet-200 "} flex justify-center items-center flex-col overflow-hidden `}>

          <button
            className={` absolute top-2 right-2 px-2 ${!themeMode ? "bg-sky-500 " : " bg-violet-500 "} rounded text-white font-bold z-30 `}
            onClick={() => { setThemeMode(!themeMode) }}
          >{`${!themeMode ? "Dark " : " Light "}`}</button>

          <ModalForInpt
            modalVisiable={modalVisiable}
            setModalVisiable={setModalVisiable}
            addNewTodo={addNewTodo}
            updatingTodo={updatingTodo}
            input={input}
            setInput={setInput}
            actualToDoUpadateFunction={actualToDoUpadateFunction}
          ></ModalForInpt>
          <TodoBody
            todoContaintArr={todoArr}
            setModalVisiable={setModalVisiable}
            updateTodo={updateTodo}
            deleteOneTodo={deleteOneTodo}
            upTodo={upTodo}
            downTodo={downTodo}
            readyForAllDelete={readyForAllDelete}
            removeReadyForAllDelete={removeReadyForAllDelete}
            allDeleteTodo={allDeleteTodo}
            makeFavirote={makeFavirote}
            makeUnFavirote={makeUnFavirote}
          ></TodoBody>

        </div>
        <span className=' font-mono fixed -bottom-2 right-1 text-slate-500 z-50 hover:bottom-0 transition-all'>By: Ashish Kuldeep</span>

      </ThemeContext.Provider>
    </>
  )
}

export default MainTodo