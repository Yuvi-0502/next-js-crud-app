export async function getUser(id) {
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  const response = await data.json();
  return response.result[0];
}


const Page = async({params}) => {
  const user = await getUser(params.userId);
  return (
    <>
    <div>
        <h1>
          User Detail
        </h1>
        <h4>Name: {user.name}</h4>
        <h4>Age: {user.age}</h4>
        <h4>Email: {user.email}</h4>
    </div>
    </>
  )
}

export default Page