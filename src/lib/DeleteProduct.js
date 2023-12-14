"use client"
import { useRouter } from "next/navigation";
const DeleteProduct = ({id}) => {
    const router = useRouter();
  const deleteProduct = async()=>{
    const data = await fetch(
        `http://localhost:3000/api/products/${id}`,{
            method:"delete"
        }
      );
      const response = await data.json();
      if (response.success) {
        alert("Product has been deleted");
        router.push('/products');
      }
  }
  return (
    <button onClick={deleteProduct}>Delete</button>
  );
};

export default DeleteProduct;
