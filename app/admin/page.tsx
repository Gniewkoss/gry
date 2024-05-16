import { getUsers } from "../actions";

export default function Admin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1>Admin Page</h1>
      <ul>
        {getUsers().then((users: any[]) =>
          users.map((user) => <li key={user.id}>* {user.email}</li>)
        )}
      </ul>
    </div>
  );
}
