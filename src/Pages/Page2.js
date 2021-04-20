import React,{useState,useEffect} from 'react'

function Page2(props){

    return(
        <div>
            <input type='text' id='text-id'/>
            <p id='error' style={{color:'green'}}></p>
            <input type='text' id='pass-id'/>
            <p id='error' style={{color:'red'}}></p>
            <button onClick={checkErr}>Check Test</button>
        </div>
    )
}
export default Page2