'use client'
import {useRouter} from 'next/navigation'

const About = ()=>{

    const navigate = useRouter()

    return(
        <div>
            <h1>About Page</h1>
            <br/>
            <br/>
            <button onClick={()=>navigate.push('/')}>Go to Home Page</button>
        </div>
    )
}

export default About;
