'use client'

import {useRouter} from "next/navigation";

const 
LoginPage = () => {
  const navigate = useRouter();

  return (
    <div>
        <h1 className='text-4xl'>LoginPage</h1>
        <br/>
        <br/>
        <button onClick={()=>{navigate.push('/')}}>Go Back</button>
    </div>
  )
}


export default LoginPage;