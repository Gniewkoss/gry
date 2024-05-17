"use client";

import { getUsers } from "../actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then((fetchedUsers) => setUsers(fetchedUsers));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="flex">Admin Page</h1>
      <button
        className=" bg-green-600 p-6 rounded-2xl"
        onClick={() => router.push("/register-game")}
      >
        Add game
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
