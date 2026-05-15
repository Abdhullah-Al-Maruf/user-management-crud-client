import AddUserModal from "@/component/AdduserModal";
import TableRows from "@/component/table";
import { createUser, deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
const dataPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="container mx-auto">

      <div className="flex justify-self-end mt-2 mb-5">
        <div></div>
        <AddUserModal addUserAction={createUser}/>
      </div>
      <TableRows users={users} deleteUserAction={deleteUser} />
  
    </div>
  );
};

export default dataPage;
