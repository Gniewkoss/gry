"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterGame() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handlePassword = () => {
    setShowPassword(!showPassword);
    console.log("showPassword", showPassword);
  };

  const handleRegisterCompany = () => {
    console.log("Register company");
  };

  return (
    <div className="flex flex-col justify-center h-screen relative">
      <button
        onClick={() => router.push("/admin")}
        className="absolute top-4 left-4 bg-gray-300 text-black p-2 rounded"
      >
        Back
      </button>
      <form className="flex flex-col gap-4 bg-gray-200 p-10 rounded-2xl w-1/2 mx-auto">
        <h1 className="text-4xl text-black">Register game</h1>

        <label>
          Game name
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Image
          <input type="url" className="rounded-lg p-2" />
        </label>

        <label>
          Website
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Type
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label htmlFor="release-date">
          Release date
          <input type="date" id="release-date" className="rounded-lg p-2" />
        </label>
        <label>
          Description
          <textarea className="rounded-lg p-2" />
        </label>
        <button
          className="bg-green-500 rounded-lg p-2"
          onClick={handleRegisterCompany}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
