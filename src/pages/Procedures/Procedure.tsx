import { SheetPage } from '@/components/reusable/SheetPage';
import { memo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const procedures = [
    { id: "p001", name: "Blood Chemistry", type: "Lab Test", department: "Laboratory" },
    { id: "p002", name: "ECG", type: "Cardiology", department: "Cardiology" },
    { id: "p003", name: "Ultrasound Abdomen", type: "Imaging", department: "Radiology" },
    { id: "p004", name: "2D Echo", type: "Cardiology", department: "Cardiology" },
    { id: "p005", name: "Urinalysis", type: "Lab Test", department: "Laboratory" },
];

const Procedure = () => {
    const handleAddSubService = (procedure: typeof procedures[0]) => {
        alert(`Add sub-service for ${procedure.name}`);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Procedure List</h2>
                <SheetPage />
            </div>

            <div className="overflow-x-auto rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No.</TableHead>
                            <TableHead>Procedure Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {procedures.map((procedure, index) => (
                            <TableRow key={procedure.id}>
                                <TableCell className="text-center">{index + 1}</TableCell>
                                <TableCell>{procedure.name}</TableCell>
                                <TableCell>{procedure.type}</TableCell>
                                <TableCell>{procedure.department}</TableCell>
                                <TableCell>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleAddSubService(procedure)}
                                    >
                                        Add Sub-Service
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

export default memo(Procedure);
