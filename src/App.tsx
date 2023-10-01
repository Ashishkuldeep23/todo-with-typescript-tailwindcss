
import React from "react"

import "./index.css"

import MainTodo from "./components/MainTodo"


// type Children = React.ReactNode;

type LayOutProp = {
  children: React.ReactNode;
  bg ?: string;
}



function Layout( {children , bg = "bg-sky-100"} : LayOutProp ) {

  // console.log(bg)

  return (
    <>
      <div className={`w-full min-h-screen p-3 flex  justify-center items-center flex-col overflow-hidden ${bg}`}>
        {children}
      </div>

    </>
  )
}




function App() {

  return (
    <>
      {/* Checking only tailwent css here --->  */}
      {/* <h1 className="text-3xl p-6 text-blue-800 text-center bg-gray-200 font-bold underline">
        Hello world!
      </h1> */}

        <Layout bg="bg-fuchsia-100">  <MainTodo /> </Layout>

    </>
  )
}

export default App
