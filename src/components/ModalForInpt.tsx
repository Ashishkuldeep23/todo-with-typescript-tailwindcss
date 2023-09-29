import React from 'react'
import { TInputOfTodo } from './MainTodo';


type TModalProps = {
  setModalVisiable: Function;
  addNewTodo: Function;
  modalVisiable: boolean;
  updatingTodo: boolean;
  input: TInputOfTodo;
  setInput: Function;
  actualToDoUpadateFunction(object:TInputOfTodo) : void;
}





const ModalForInpt = ({ setModalVisiable, modalVisiable, addNewTodo, updatingTodo, input, setInput , actualToDoUpadateFunction }: TModalProps) => {


  // const [modalVisiable , setModalVisiable] = useState<boolean>(false)

  // const [input, setInput] = useState<TInputOfTodo>({ heading: "", content: "" })



  // // // This type should used as type of input elemet nd text area elemet
  type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

  function onChangeHandler(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    // console.log(e)

    setInput({ ...input, [e.target.name]: e.target.value })
  }


  // MouseEvent<HTMLButtonElement, MouseEvent>
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    e.stopPropagation()


    if( !input.heading || !input.content ){
      return alert("[404] :ToDo Data not given")
    }


    if (updatingTodo) {
      // alert("ready for update")
      // console.log(input)
      actualToDoUpadateFunction(input)
    } else {
      setInput({ heading: "", content: "" })
      addNewTodo(input); setModalVisiable(false);
    }


  }


  return (
    <div className={` h-screen w-screen border  bg-blue-300 absolute z-20 justify-center items-center ${modalVisiable ? "flex" : 'hidden'} `} >

      <div className=' w-11/12 md:w-1/4 p-2 bg-orange-300 border border-red-500 rounded-2xl flex flex-col text-center py-8 relative'>
        <button className=' absolute right-3 top-2 border px-1 bg-red-500 hover:bg-red-700 rounded-lg' onClick={() => { setModalVisiable(false) }}>X</button>
        <h2 className='text-2xl font-bold underline'>{updatingTodo ? "Update" : "Create"} Todo</h2>

        <label
          htmlFor="heading"
          className='text-left mt-4'
        >TODO Heading ⬇️</label>
        <input
          type="text" id='heading' name="heading"
          onChange={onChangeHandler}
          value={input.heading}
          placeholder='TODO heading'
        />

        <label
          htmlFor="content"
          className='text-left  mt-4'
        >TODO Heading ⬇️</label>
        <textarea
          name="content"
          onChange={onChangeHandler}
          id="content"
          placeholder='TODO Body'
          value={input.content}
          rows={5}
        ></textarea>

        <button
          className=' border w-fit  px-2 py-1 rounded ms-auto m-2 font-bold bg-green-400 hover:bg-green-600 hover:text-white'
          onClick={handleClick}
        >{updatingTodo ? "Update" : "Create"}</button>
      </div>


    </div>
  )
}

export default ModalForInpt