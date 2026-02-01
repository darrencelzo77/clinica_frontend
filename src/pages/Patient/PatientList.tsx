import { DialogPage } from "@/components/reusable/DialogPage";
import { memo } from "react";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import type { PatientData } from "@/types/type";
import { IconGitBranch } from "@tabler/icons-react";
import { ReusableTable } from "@/components/reusable/Table/ReusableTable";
import { columns } from "./Columns";
const data: PatientData[] = [
    {
        id: "1",
        seriesId: "S-001",
        firstName: "Gwen",
        middleName: "Aris",
        lastName: "Macalinao",
        processedBy: "Doc Darren Acuna",
        status: "New",
    },
    {
        id: "2",
        seriesId: "S-002",
        firstName: "John",
        lastName: "Doe",
        processedBy: "Doc Darren Acuna",
        status: "Old",
    },
    {
        id: "3",
        seriesId: "S-003",
        firstName: "Maria",
        middleName: "Lopez",
        lastName: "Santos",
        processedBy: "Doc Kevin Lim",
        status: "New",
    },
    {
        id: "4",
        seriesId: "S-004",
        firstName: "Paolo",
        lastName: "Reyes",
        processedBy: "Doc Kevin Lim",
        status: "New",
    },
    {
        id: "5",
        seriesId: "S-005",
        firstName: "Angela",
        middleName: "Marie",
        lastName: "Cruz",
        processedBy: "Doc Samantha Lee",
        status: "Old",
    },
    {
        id: "6",
        seriesId: "S-006",
        firstName: "Mark",
        lastName: "Villanueva",
        processedBy: "Doc Darren Acuna",
        status: "New",
    },
    {
        id: "7",
        seriesId: "S-007",
        firstName: "Liza",
        lastName: "Fernandez",
        processedBy: "Doc Samantha Lee",
        status: "New",
    },
    {
        id: "8",
        seriesId: "S-008",
        firstName: "Joshua",
        middleName: "Lee",
        lastName: "Tan",
        processedBy: "Doc Kevin Lim",
        status: "Old",
    },
    {
        id: "9",
        seriesId: "S-009",
        firstName: "Nicole",
        lastName: "Chua",
        processedBy: "Doc Darren Acuna",
        status: "New",
    },
]


const PatientList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Patient List</h2>

                <DialogPage>
                    <Button size="sm">
                        <IconGitBranch className="mr-2 h-4 w-4" />
                        Add New Patient
                    </Button>
                </DialogPage>
            </div>

            <ReusableTable
                columns={columns}
                data={data}
                filterColumn="firstName"
            />
        </div>
    )
};

export default memo(PatientList);
