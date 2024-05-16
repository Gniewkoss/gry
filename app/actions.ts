"use server";
const USERS_API = "http://207.154.254.220:8000/users";

const getUsers = async () => {
  try {
    const response = await fetch(USERS_API, { cache: "no-cache" });
    if (response.ok) {
      const users = await response.json();
      console.log(users);
      return users;
    } else {
      console.log("Error fetching users");
    }
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (formData: any) => {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(rawData);
  try {
    const response = await fetch(USERS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawData),
    });
    if (response.ok) {
      console.log("User added");
    } else {
      console.log("Error adding user");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, addUser };
