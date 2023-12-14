import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
  const data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
  const response = await data.json();
  if (response.success) {
    return response.result;
  } else {
    alert(response.result.error);
  }
};

const Page = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Product List</h1>
      <table border="3">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><Link href={`/products/${product._id}`}>Edit</Link></td>
              <td><DeleteProduct id = {product._id} /></td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
