import React,{useState,useEffect} from 'react'


function PageOne(props){

    const {names,setNames, editFunct}=props

    const [edit,setEdit]=useState('')
    const [btnName,setBtn]=useState('Add')
    const [editIndex,setIndex]=useState('')
    const [filterName,setFilterName]=useState('')

    const addNames=function(){
        if(btnName==='Add'){
            editFunct(edit)
            setEdit('')
        }
        else{
            const temp=[...names]
            //  temp.splice(index,1)
            temp.splice(editIndex,1,edit)
            setNames(temp)
            setEdit('')
            setBtn('Add')
        }
       
    }
   
    const deleteNames=function(item,index){
        const temp=[...names]
        temp.splice(index,1)
        setNames(temp)
    }

    const editNames=function(item,index){
        setBtn('Update')
        setEdit(item)
        setIndex(index)
    }
    
    console.table(props.names)

    return(
        <div>
            <input type='text' id='inp-id' placeholder='type name' value={edit} onChange={e=>setEdit(e.target.value)}/>
            <button onClick={addNames}>{btnName}</button><br/>

            <input type='text' placeholder='search name' value={filterName} onChange={e=>setFilterName(e.target.value)}/>
           
            
            {names.filter(name=>name.includes(filterName)).map((item,index)=>{
                return(
                    <ul >
                        <li>{item} 
                            <button onClick={()=>editNames(item,index)}>Edit</button>
                            <button onClick={()=>deleteNames(item,index)}>Delete</button>
                        </li>
                       
                    </ul>
                )
            })
            }
            

            
            
        </div>
    )
}
export default PageOne