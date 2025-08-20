import { memo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const initialBranches = [
  { id: 1, name: "Cabanatuan" },
  { id: 2, name: "Nueva Ecija" },
];

const Branch = () => {
  const [branches, setBranches] = useState(initialBranches);

  const handleEdit = (branchId: number) => {
    const newName = prompt("Edit Branch Name:", branches.find(b => b.id === branchId)?.name);
    if (newName) {
      setBranches((prev) =>
        prev.map((b) => (b.id === branchId ? { ...b, name: newName } : b))
      );
    }
  };

  return (
    <div className="Branch space-y-4 p-4">
      <h2 className="text-xl font-semibold">Branches</h2>

      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Branch Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {branches.map((branch, index) => (
              <TableRow key={branch.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>{branch.name}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(branch.id)}>
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

export default memo(Branch);
