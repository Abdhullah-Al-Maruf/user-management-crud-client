"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ addUserAction }) => {
  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className="border rounded-md border-blue-400"
        >
          Add new User
        </Button>
        <Modal.Backdrop
          className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
          variant="blur"
        >
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Add New user</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Add details of the user
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form 
                  action={addUserAction}
                  className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email">
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="text">
                      <Label>role</Label>
                      <Input placeholder="Enter your role" />
                    </TextField>
                    <TextField className="w-full" name="state">
                      <Label>state</Label>
                      <Input placeholder="Enter your state name" />
                    </TextField>
                    <TextField className="w-full" name="zip-code">
                      <Label>zip</Label>
                      <Input placeholder="Enter your zip code" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button
                      type="submit"
                      slot="close">Send Message</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AddUserModal;
