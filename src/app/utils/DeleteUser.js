"use client"

export default function DeleteUser({id}){
    const userId = id;
    const deleteUser = async()=>{
        const data = await fetch(`http://localhost:3000/api/users/${userId}`,{
            method:"delete"
        })
        const response = await data.json();
        if(response.success){
            alert(response.result)
        }
    }
    return <button onClick={deleteUser}>Delete</button>
}