"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount((count)=> count+1)
  }
  function handleReduce(){
    if(count==0){
      return alert('Count is at Minimum 0')
    }
    setCount((count)=>count-1)
  }
  return (
    <main>
      <h1 className="text-center text-2xl font-bold">Counter App</h1>
      <div>
        <h2 className="text-center font-bold text-4xl my-7"> Count: {count}</h2>
      </div>
      <div className="text-center">
          <button
            className="border border-black  px-4 py-2 mr-2"
            onClick={handleReduce}
          >
            -
          </button>

          <button
            className="border border-black  px-4 py-2 ml-2"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
    </main>
  );
}
