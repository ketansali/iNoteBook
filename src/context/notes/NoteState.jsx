import React,{useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
    const [notes ,setNotes] = useState('')
    const addNote = async (title,description,tag)=>{
         await fetch('http://localhost:7600/api/note/createNote',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify({title,description,tag})
        })   
    }
    const getNotes = async ()=>{
        const res = await fetch('http://localhost:7600/api/note/getNotes',{
            method : 'Get',
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('token')}`
            }
            
        })  
        const data = await res.json()
        setNotes(data)
    }
    const deleteNote = async (_id)=>{
        await fetch(`http://localhost:7600/api/note/deleteNote/${_id}`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('token')}`
            }
            
        })  
    }
    const editNote = async (_id,title,description,tag)=>{
         await fetch(`http://localhost:7600/api/note/updateNote/${_id}`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify({title,description,tag})
        })   
    }
    return (
        <NoteContext.Provider value={{addNote,getNotes,notes,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState