import { memo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DoctorList = () => {
  const doctors = [
    { id: 1, name: "Dr. John Smith", specialty: "Cardiology", email: "john.smith@example.com" },
    { id: 2, name: "Dr. Emily Davis", specialty: "Neurology", email: "emily.davis@example.com" },
    { id: 3, name: "Dr. Michael Johnson", specialty: "Pediatrics", email: "michael.johnson@example.com" },
    { id: 4, name: "Dr. Olivia Martinez", specialty: "Dermatology", email: "olivia.martinez@example.com" },
    { id: 5, name: "Dr. William Brown", specialty: "Orthopedics", email: "william.brown@example.com" },
    { id: 6, name: "Dr. Sophia Lee", specialty: "Ophthalmology", email: "sophia.lee@example.com" },
  ];

  const handleAddDoctor = () => {
    alert("Add Doctor clicked");
  };

  const handleEditDoctor = (doctor: typeof doctors[0]) => {
    alert(`Edit ${doctor.name}`);
  };

  const handleArchiveDoctor = (doctor: typeof doctors[0]) => {
    alert(`Archive ${doctor.name}`);
  };

  return (
    <div className="DoctorList p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Doctor List</h2>
        <Button onClick={handleAddDoctor} variant="outline">Add Doctor</Button>
      </div>

      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {doctors.map((doctor, index) => (
              <TableRow key={doctor.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell className="lowercase">{doctor.email}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEditDoctor(doctor)}>Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleArchiveDoctor(doctor)}>Archive</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default memo(DoctorList);
