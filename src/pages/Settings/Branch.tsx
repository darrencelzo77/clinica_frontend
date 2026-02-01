import { memo } from "react"
import { ReusableTable } from "@/components/reusable/Table/ReusableTable"
import type { BranchData } from "@/types/type"
import { columns } from "./BranchColumn"
import { DialogPage } from "@/components/reusable/DialogPage"
import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"

const data: BranchData[] = [
  { id: 1, name: "Cabanatuan" },
  { id: 2, name: "Nueva Ecija" },
  { id: 2, name: "Manila" },
]

const Branch = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Branches</h2>
        <DialogPage>
          <Button size="sm">
            <IconGitBranch className="mr-2 h-4 w-4" />
            Add Branch
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

export default memo(Branch)
