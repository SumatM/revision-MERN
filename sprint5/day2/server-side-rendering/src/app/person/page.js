"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
const Person = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://reqres.in/api/users").then((res) => {
     // console.log(res.data);
      setData(res.data.data);
    });
  }, []);



  return (
    <div>
      <div>
        {data?.map((item) => {
          return (
            <Link href={`/person/${item.id}`}>
            <div style={{border:'1px solid',width:'50%',margin:'auto', display:'flex',marginTop:'10px',padding:'10px'}}>
              <h2>Name: {item.first_name} {item.last_name}</h2>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Person;
