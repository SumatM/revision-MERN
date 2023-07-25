'use client'

import { useState } from "react";

export const Form = () => {
    const [input,setinput] = useState({name:'',email:''})

    function handleInput(e){
        setinput({...input,[e.target.name]:e.target.value})
    }

    function loginNow(){
        console.log(input);
    }

  return (
    <div>
      <input placeholder="Enter your name" name='name' onChange={handleInput}/>
      <br />
      <input placeholder="Enter your email" name='email' onChange={handleInput}/>
      <br />
      <button onClick={loginNow}>Loin Now</button>
    </div>
  );
};
