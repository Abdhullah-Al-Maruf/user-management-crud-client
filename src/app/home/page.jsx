import TableRows from "@/component/table";
import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
const dataPage = async() => {
    const users=await getUsers()
console.log(users);
    return (
       <div>
 <TableRows users={users} deleteUserAction={deleteUser} />
</div>
    );
};

export default dataPage;