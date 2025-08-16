import { DialogPage } from "@/components/reusable/DialogPage"
import { TableNew } from "@/components/reusable/Table/TableNew"
import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"


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
            <TableNew />
        </div>
    )
}

export default PatientList
