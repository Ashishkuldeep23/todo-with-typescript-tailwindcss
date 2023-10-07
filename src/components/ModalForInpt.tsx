import React , {useContext} from 'react'
import { TInputOfTodo } from './MainTodo';
import ThemeContext from './ThemeContext';


type TModalProps = {
  setModalVisiable: Function;
  addNewTodo: Function;
  modalVisiable: boolean;
  updatingTodo: boolean;
  input: TInputOfTodo;
  setInput: Function;
  actualToDoUpadateFunction(object: TInputOfTodo): void;
}





const ModalForInpt = ({ setModalVisiable, modalVisiable, addNewTodo, updatingTodo, input, setInput, actualToDoUpadateFunction }: TModalProps) => {

  const theme =  useContext(ThemeContext);

  // const [modalVisiable , setModalVisiable] = useState<boolean>(false)

  // const [input, setInput] = useState<TInputOfTodo>({ heading: "", content: "" })


  // // // New method used to focus() input tag , see the first input box ---> ( arrow fn used in ref prop of input.)




  // // // This type should used as type of input elemet nd text area elemet
  type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

  function onChangeHandler(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    setInput({ ...input, [e.target.name]: e.target.value })
  }


  // MouseEvent<HTMLButtonElement, MouseEvent>
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    e.stopPropagation()


    if (!input.heading || !input.content) {
      return alert("[400] :ToDo Data not given")
    }


    if (updatingTodo) {
      // // // Upadte todo fn
      // alert("ready for update")
      // console.log(input)
      actualToDoUpadateFunction(input)
    } else {
      // // // Add todo fn ( set default values and add new todo by add to fn and hide modal)
      setInput({ id: "", heading: "", content: "", isFav: false })
      addNewTodo(input); setModalVisiable(false);
    }


  }




  return (
    <div className={`h-full w-screen border  ${!theme ? "bg-blue-300" : "bg-sky-900"} flex flex-col justify-center items-center absolute transition-all  
       ${modalVisiable ? " top-0 z-50" : ' top-full -z-50 hidden'} `}
    >

      <div className=' animate__animated  animate__flipInX  w-11/12 md:w-1/4 p-2 bg-orange-300 border border-red-500 rounded-2xl flex flex-col text-center py-8 relative'>
        <button
          className=' animate__animated animate__zoomInLeft animate__slow absolute right-3 top-2 border px-2 text-white font-bold rounded-lg bg-red-500 hover:bg-red-700 hover:scale-110 active:scale-90 transition-all '
          onClick={() => { setModalVisiable(false) }}
        >X</button>
        <h2 className='text-2xl font-bold underline'>{updatingTodo ? "Update" : "Create"} Todo</h2>

        <label
          htmlFor="heading"
          className='text-left mt-4'
        >TODO Heading ⬇️</label>

        <input
          className='rounded focus:bg-green-200'
          type="text" id='heading' name="heading"
          onChange={onChangeHandler}
          value={input.heading}
          placeholder='TODO Heading'
          // ref={todoHeading}
          //   ref = {(inp) => {
          //     inp?.focus();
          //  }}

        />

        <label
          htmlFor="content"
          className='text-left  mt-4'
        >TODO Heading ⬇️</label>
        <textarea
          className='rounded focus:bg-green-200 max-h-80 min-h-5 '
          name="content"
          onChange={onChangeHandler}
          id="content"
          placeholder='TODO Content'
          value={input.content}
          rows={5}
        ></textarea>

        <button
          className=' border w-fit  px-5 py-1 m-2 mr-0 rounded ml-auto font-bold bg-green-400 hover:bg-green-600 hover:text-white hover:scale-110 active:scale-90 transition-all '
          onClick={handleClick}
        >{updatingTodo ? "Update" : "Create"}</button>
      </div>

      <button
        className=' animate__animated  animate__zoomInDown  w-11/12 md:w-1/4 my-2 border px-2 text-white font-bold rounded-lg bg-red-500 uppercase hover:bg-red-700 hover:scale-105 active:scale-90 transition-all '
        onClick={() => { setModalVisiable(false) }}
      >Close</button>


    </div>
  )
}

export default ModalForInpt