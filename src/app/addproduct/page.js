"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import "../style.css"
export  default function Page(){
    const router = useRouter();
    const [input,setInput] = useState({
        name:"",
        price:"",
        description:""
    })

    const handleEvent = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setInput((prev)=>{
            return {...prev,[name]:value}
        })
       
    }

    const saveProduct = async() =>{
        const data = await fetch(`http://localhost:3000/api/products`,{
            method:"post",
            body:JSON.stringify(input)
        });
        const response = await data.json();
        if(response.success){
            alert("product added")
            router.push('/');
        }
        setInput({
            name:"",
            price:"",
            description:""
        })
    }
    return (
        <div>
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product Name" className="input" onChange={handleEvent} value={input.name} name="name"/>
            <input type="text" placeholder="Enter Product Price" className="input" onChange={handleEvent} value={input.price} name="price"/>
            <input type="text" placeholder="Enter Product Description" className="input" onChange={handleEvent} value={input.description} name="description"/>
            <button className="btn" onClick={saveProduct}>Add Product</button>
        </div>
    )
}