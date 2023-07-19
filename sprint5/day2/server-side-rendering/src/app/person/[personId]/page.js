'use client'

import { useEffect, useState } from "react";
import axios from "axios";
const personId = ({params}) => {

console.log(params);

const [id,setId] = useState(params.personId);
const [data, setData] = useState([]);

useEffect(() => {
    axios(`https://reqres.in/api/users/${id}`).then((res) => {
     console.log(res.data);
      setData(res.data.data);
    });
  }, []);


  return (
    <div style={{border:'1px solid',width:'60%',margin:'auto', display:'flex',marginTop:'10px',padding:'10px'}}>
        <div style={{border:'1px solid',padding:'10px'}}>
            <img src={data.avatar} alt={data.first_name}/>
        </div>
        <div style={{border:'1px solid',padding:'10px',marginLeft:'25px'}}>
            <h2>Name : {data.first_name} {data.last_name}</h2>
            <h2>Email : {data.email}</h2>
        </div>
    </div>
  )
}


export default personId;