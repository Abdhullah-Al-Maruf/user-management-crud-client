"use client";


import { AlertDialog } from "@heroui/react";
import { Button, Table } from "@heroui/react";
import Link from "next/link";

const TableRows = ({ users,deleteUserAction }) => {

  const handleDelete = async (userId)=>{
   await deleteUserAction(userId)

  }

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
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.address.street}</Table.Cell>
                  <Table.Cell>{user.address.zip}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell className=" flex flex-wrap gap-3 md:flex-row">

                    <Button variant="secondary">update</Button>

                    {/* delete button */}
                    <AlertDialog>
                      <Button variant="danger">Delete</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete project permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>{user.name} </strong>
                                from the database and all of its data. This
                                action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button 
                              onClick={()=>handleDelete(user._id)}
                              slot="close" variant="danger">
                                Delete User
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>

                    <Link href={`/home/${user._id}`}>
                      <Button variant="primary">details</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default TableRows;
