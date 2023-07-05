
export default function Home() {
  return (
    <main >
      <h1 className="text-center text-2xl font-bold">Todo App</h1>
      <MyInfo  name={"sumat"}/>
      <HisInfo name={'aman'}/>
    </main>
  )
}



export const MyInfo = (prop)=>{

  return (
    <div>
      Hello! my name if {prop.name}
    </div>
  )
}


export const HisInfo = ({name})=>{
  console.log(name);
  return (
    <div>
      Hello! my name if {name}
    </div>
  )
}

