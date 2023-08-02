import { useEffect, useRef, useState } from "react"


export const Todo = () => {

  const bodyref: React.MutableRefObject<any> = useRef(null);



  function randomColor(): string {
    let color1 = Math.floor(Math.random() * 255)
    let color2 = Math.floor(Math.random() * 255)
    let color3 = Math.floor(Math.random() * 255)
    return (`rgb(${color1}, ${color2}, ${color3})`)
  }

  let flag: boolean = true;
  let id: React.MutableRefObject<any>
    = useRef(0)


  function handleChange(): void {
    console.log(flag)


    console.log(1)

    flag = !flag ? true : false;
    console.log(2)
    id.current = setTimeout(() => {
      bodyref.current.style.background = randomColor()
      console.log(3)
      flag = true;
    }, 1000);
    console.log(4)


    if (flag) {
      console.log(5, id)
      clearTimeout(id.current)
      flag = true
      console.log(6)
    }


  }


  useEffect(() => {
    bodyref.current.style.background = randomColor()

    return () => {
      bodyref.current.style.background = `rgb(4, 251, 255)`
    }
  }, [])

  return (
    <div ref={bodyref} style={{ height: '100vh' }}>
      <h1>Todo App</h1>
      <br />
      <button onClick={handleChange}>Change Bg</button>
    </div>
  )
}
