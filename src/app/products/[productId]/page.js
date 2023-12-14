"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function Page({ params }) {
    const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleEvent = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getProductDetails = async () => {
    const data = await fetch(
      `http://localhost:3000/api/products/${params.productId}`
    );
    const response = await data.json();
    if (response.success) {
      const defaultValue = response.result;
      setInput({
        name: defaultValue.name,
        price: defaultValue.price,
        description: defaultValue.description,
      });
    }
  };

  const updateProduct = async() =>{
      const data = await fetch(`http://localhost:3000/api/products/${params.productId}`,{
          method:"put",
          body:JSON.stringify(input)
      });
      const response = await data.json();
      if(response.success){
          alert("Product has been updated");
          router.push('/products')
      }
      setInput({
          name:"",
          price:"",
          description:""
      })
  }

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div>
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="input"
        onChange={handleEvent}
        value={input.name}
        name="name"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        className="input"
        onChange={handleEvent}
        value={input.price}
        name="price"
      />
      <input
        type="text"
        placeholder="Enter Product Description"
        className="input"
        onChange={handleEvent}
        value={input.description}
        name="description"
      />
      <button className="btn" onClick={updateProduct}>Update Product</button>
      <Link href={'/products'}>Go to Product List</Link>
    </div>
  );
}
