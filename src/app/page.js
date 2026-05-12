import TableRows from "@/component/table";
import { getUsers } from "@/lib/data";



export default  async function  Home() {
const users=await getUsers()
console.log(users);
  return (
  <>
<div>
 <TableRows users={users}/>
</div>
  </>
  );
}
