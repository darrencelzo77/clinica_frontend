import { memo } from "react"
import { ReusableTable } from "@/components/reusable/Table/ReusableTable"
import { columns } from "./DepartmentColumn"
import { DialogPage } from "@/components/reusable/DialogPage"
import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"
import type { DepartmentData } from "@/types/type"

const data: DepartmentData[] = [
  { id: 1, name: "Laboratory" },
  { id: 2, name: "Radiology" },
  { id: 3, name: "Reception (Staff)" },
]

const Department = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Departments</h2>
        <DialogPage>
          <Button size="sm">
            <IconGitBranch className="mr-2 h-4 w-4" />
            Add Department
          </Button>
        </DialogPage>
      </div>

      <ReusableTable
        columns={columns}
        data={data}
        filterColumn="name"
      />
    </div>
  )
}

export default memo(Department)
