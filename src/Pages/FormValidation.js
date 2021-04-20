import React,{useState,useEffect} from 'react'


var textValid=function(name){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(name)){
        return true;
    }
    else{
        return false;
    }
}
var passValid=function(phNum){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(phNum)){
        return true;
    }
    else{
        return false;
    }
}
function FormValidation(props){

    const checkErr=function(){
        var name = document.getElementById('text-id').value;
        var phNum = document.getElementById('pass-id').value;
        if(textValid(name)){
            
            if(passValid(phNum)){
                alert('name pass Ok')
            }
            else{
                alert('pass wrong')
            }
        }
        else{
            alert('name wrong')
        }
    }
    

    return(
        <div>
            <input type='text' id='text-id' placeholder='email'/>
            <p id='error' style={{color:'green'}}></p>
            <input type='text' id='pass-id' placeholder='password'/>
            <p id='error' style={{color:'red'}}></p>
            <button onClick={checkErr}>Check Test</button>
        </div>
    )
}
export default FormValidation