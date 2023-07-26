import Script from "next/script";
import { redirect } from "next/navigation";

export default function Location(){

    

    return (<div>
    <Script src="/location.js"/>
        <h1>Location</h1>
    </div>)
}