import { DialogPage } from "@/components/reusable/DialogPage"
import { ReusableTable } from "@/components/reusable/Table/ReusableTable"

import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"
import { columns } from "./Columns"
import type { CaseData } from "@/types/type"


const data: CaseData[] = [
    {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    }, {
        id: "1",
        caseNumber: "CASE-1001",
        patientName: "Alice Santos",
        doctorAssigned: "Dr. Lim",
        processedBy: "Nurse Joy",
        status: "open",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },
    {
        id: "2",
        caseNumber: "CASE-1002",
        patientName: "Ben Cruz",
        doctorAssigned: "Dr. Reyes",
        processedBy: "Nurse Faith",
        status: "in-progress",
    },

]

const CaseList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Case List</h2>

                <DialogPage>
                    <Button size="sm">
                        <IconGitBranch className="mr-2 h-4 w-4" />
                        Add New Case
                    </Button>
                </DialogPage>
            </div>

            <ReusableTable
                columns={columns}
                data={data}
                filterColumn="patientName"
            />
        </div>
    )
}

export default CaseList
