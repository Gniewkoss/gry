"use client";
import { useState } from "react";
export default function RegisterCompany() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
    console.log("showPassword", showPassword);
  };

  const handleRegisterCompany = () => {
    console.log("Register company");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form className="flex flex-col gap-4 bg-gray-200 p-10 rounded-2xl w-1/2">
        <h1 className="text-4xl text-black">Register your company</h1>
        <label>
          Company name
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Website
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Email
          <input type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Password:
          <input type={showPassword ? "text" : "password"} id="myInput" />
        </label>
        <label htmlFor="" className=" flex">
          <span className="w-[120px]">Show password</span>
          <input
            className="w-[30px]"
            type="checkbox"
            onClick={handlePassword}
          />
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
