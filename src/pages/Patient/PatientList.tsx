import { DialogPage } from "@/components/reusable/DialogPage";
import { memo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

// Sample patient data
const initialPatients = [
    {
        queue: 1,
        caseNumber: "C001",
        firstName: "Gwen Aris",
        lastName: "Macalinao",
        processedBy: "Doc Darren Acuna",
        status: "Pending",
        department: "Laboratory"
    },
    {
        queue: 2,
        caseNumber: "C002",
        firstName: "John",
        lastName: "Doe",
        processedBy: "Doc Darren Acuna",
        status: "Completed",
        department: "Radiology"
    },
];

const PatientList = () => {
    const [patients, setPatients] = useState(initialPatients);

    const handleViewHistory = (patient: typeof initialPatients[0]) => {
        alert(`View history for ${patient.firstName} ${patient.lastName}`);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Patient List</h2>
                <DialogPage>
                    <Button size="sm">Add New Patient</Button>
                </DialogPage>
            </div>

            <div className="overflow-x-auto rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Queue #</TableHead>
                            <TableHead>Case Number</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Processed By</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Active Department</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow key={patient.caseNumber}>
                                <TableCell className="text-center">{patient.queue}</TableCell>
                                <TableCell>{patient.caseNumber}</TableCell>
                                <TableCell>{patient.firstName}</TableCell>
                                <TableCell>{patient.lastName}</TableCell>
                                <TableCell>{patient.processedBy}</TableCell>
                                <TableCell>{patient.status}</TableCell>
                                <TableCell>{patient.department}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" variant="outline">Actions</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Request Forms</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => handleViewHistory(patient)}>View History</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>ECG Request Form</DropdownMenuItem>
                                            <DropdownMenuItem>Laboratory Request Form</DropdownMenuItem>
                                            <DropdownMenuItem>Ultrasound Request Form</DropdownMenuItem>
                                            <DropdownMenuItem>2D Echo Request Form</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default memo(PatientList);
