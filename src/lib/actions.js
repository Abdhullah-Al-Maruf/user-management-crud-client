import { revalidatePath } from "next/cache";

// create action
export const createUser = async (formData) => {
  "use server";

  const rawData = Object.fromEntries(formData.entries());
const newUser = {
    name: rawData.name,
    email: rawData.email,
    role: rawData.role,
    address: {
      // Map the flat form fields into the nested 'address' object
      street: rawData.state, 
      zip: rawData["zip-code"],
    },
};

  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  data = await res.json();

  // todo : revalidate Path
  
  return data;
};

// delete action
export const deleteUser = async (userId) => {
  "use server";

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  // todo : revalidate cache
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }

  return data;
};
