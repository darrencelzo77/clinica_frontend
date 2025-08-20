import { memo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const initialDepartments = [
  { id: 1, name: "Laboratory" },
  { id: 2, name: "Radiology" },
  { id: 3, name: "Reception (Staff)" },
];

const Department = () => {
  const [departments, setDepartments] = useState(initialDepartments);

  const handleEdit = (deptId: number) => {
    const newName = prompt("Edit Department Name:", departments.find(d => d.id === deptId)?.name);
    if (newName) {
      setDepartments((prev) =>
        prev.map((d) => (d.id === deptId ? { ...d, name: newName } : d))
      );
    }
  };

  return (
    <div className="Department space-y-4 p-4">
      <h2 className="text-xl font-semibold">Departments</h2>

      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Department Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((dept, index) => (
              <TableRow key={dept.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>{dept.name}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(dept.id)}>
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

export default memo(Department);
