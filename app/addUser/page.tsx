import { addUser } from "../actions";
export default function AddUser() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1>Add User Page</h1>
      <form action={addUser}>
        <label className="text-black" htmlFor="email">
          Email:
        </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
