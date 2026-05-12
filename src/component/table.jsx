import {Button, Table} from "@heroui/react";import Link from "next/link";
import { use } from "react";


const TableRows = ({users}) => {
    return (
        <div>
            <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>State</Table.Column>
            <Table.Column>Zip</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map(user=><Table.Row  key={user._id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.address.street}</Table.Cell>
              <Table.Cell>{user.address.zip}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell className=" flex flex-wrap gap-3 md:flex-row" >

             
                <Button variant="secondary">update</Button>
                
                

            
                <Button variant="danger-soft">delete</Button>
               

                <Link href="">
                <Button variant="primary">details</Button>
                </Link>

              </Table.Cell>
            
            </Table.Row>)}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
    );
};

export default TableRows;