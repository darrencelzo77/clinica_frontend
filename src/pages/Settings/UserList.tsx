import { memo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const initialUsers = [
  { id: 1, name: "Gwen Aris Macalinao" },
  { id: 2, name: "Darren Acuna" },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleEdit = (userId: number) => {
    const newName = prompt("Edit User Name:", users.find(u => u.id === userId)?.name);
    if (newName) {
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, name: newName } : u))
      );
    }
  };

  return (
    <div className="UserList space-y-4 p-4">
      <h2 className="text-xl font-semibold">User List</h2>

      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(user.id)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default memo(UserList);
