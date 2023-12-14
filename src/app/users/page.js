import Link from "next/link";
import DeleteUser from "../utils/DeleteUser";

export async function getUsers() {
  const data = await fetch("http://localhost:3000/api/users");
  const response = await data.json();
  return response.result;
}

const User = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} >
        <span  style={{display:"inline-block", width:"100px"}}><Link href={`/users/${user.id}`}>{user.name}</Link></span>
        <span style={{display:"inline-block", width:"100px"}}><Link href={`users/${user.id}/update`}>Edit</Link></span>
        <span style={{display:"inline-block", width:"100px"}}><DeleteUser id={user.id}/></span>
        </div>
      ))}
    </div>
  );
};

export default User;
