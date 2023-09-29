import { useState } from 'react'

import '../index.css'
import ModalForInpt from './ModalForInpt'
import TodoBody from './TodoBody'



export interface TTodoObj {
  id: number | string;
  heading: string;
  content: string;
  isDeletable?: boolean;
}


export type TInputOfTodo = {
  heading: string;
  content: string;
  id: string | number;
}




// let todoContaintArr: TTodoObj[] = [
//   { id: "1", heading: "I'm todo 1 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false },
//   { id: "2", heading: "I'm todo 2 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false },
//   { id: "3", heading: "I'm todo 3 Heading", content: "Content Content Content Content Content Content Content Content", isDeletable: false },
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
  const [input, setInput] = useState<TInputOfTodo>({ id: "", heading: "", content: "" })





  // function showWrittingPanel() {
  //   return
  // }  


  function addNewTodo(obj: TInputOfTodo) {

    setTodoArr([...todoArr, { ...obj, id: `${todoArr.length + 1}`, isDeletable: false }])

  }



  function updateTodo(obj: TInputOfTodo) {

    // console.warn(JSON.stringify(obj))
    setModalVisiable(true)
    setUpdatingTodo(true)
    setInput({ id: obj.id, heading: obj.heading, content: obj.content })

  }


  function actualToDoUpadateFunction(obj: TInputOfTodo) {

    let arr = [...todoArr]
    let findIndex = arr.findIndex((e) => { return e.id === obj.id })
    arr.splice(findIndex, 1, input)

    setTodoArr(arr)

    // // Back to normal all ------>

    setModalVisiable(false)
    setUpdatingTodo(false)
    setInput({id:"" ,heading:"", content:""})

  }



  function deleteTodo(obj: TInputOfTodo) {

    // alert("cl")

    setTodoArr(todoArr.filter((el: TInputOfTodo) => { return el.id !== obj.id }))
  }


  function upTodo(obj: TInputOfTodo) {
    // alert("up")

    let findIndex = todoArr.findIndex((ele) => { return obj.id === ele.id })
    // console.log(findIndex)

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

    console.log(findIndex)




    let arr = [...todoArr]
    let currentItem = arr[findIndex]
    arr[findIndex] = arr[findIndex + 1]

    arr[findIndex + 1] = currentItem


    // console.log(arr)

    setTodoArr(arr)


  }





  return (
    <>

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
        deleteTodo={deleteTodo}
        upTodo={upTodo}
        downTodo={downTodo}
      ></TodoBody>

    </>
  )
}

export default MainTodo