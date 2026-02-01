import { DialogPage } from "@/components/reusable/DialogPage"
import { memo } from "react"
import { Button } from "@/components/ui/button"
import type { ProcedureData } from "@/types/type"
import { IconGitBranch } from "@tabler/icons-react"
import { ReusableTable } from "@/components/reusable/Table/ReusableTable"
import { columns } from "./Columns"

const data: ProcedureData[] = [
    {
        id: "1",
        no: "01",
        procedureName: "Blood Chemistry",
        type: "Lab Test",
        department: "Laboratory",
    },
    {
        id: "2",
        no: "02",
        procedureName: "ECG",
        type: "Cardiology",
        department: "Cardiology",
    },
    {
        id: "3",
        no: "03",
        procedureName: "Ultrasound Abdomen",
        type: "Imaging",
        department: "Radiology",
    },
    {
        id: "4",
        no: "04",
        procedureName: "2D Echo",
        type: "Cardiology",
        department: "Cardiology",
    },
    {
        id: "5",
        no: "05",
        procedureName: "Urinalysis",
        type: "Lab Test",
        department: "Laboratory",
    },
]

const ProcedureList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Procedure List</h2>

                <DialogPage>
                    <Button size="sm">
                        <IconGitBranch className="mr-2 h-4 w-4" />
                        Add New Procedure
                    </Button>
                </DialogPage>
            </div>

            <ReusableTable
                columns={columns}
                data={data}
                filterColumn="procedureName"
            />
        </div>
    )
}

export default memo(ProcedureList)
