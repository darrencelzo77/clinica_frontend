import { memo } from "react"
import { ReusableTable } from "@/components/reusable/Table/ReusableTable"

import { DialogPage } from "@/components/reusable/DialogPage"
import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"
import type { UserData } from "@/types/type"
import { columns } from "./DepartmentColumn"

const data: UserData[] = [
  { id: 1, name: "Gwen Aris Macalinao" },
  { id: 2, name: "Darren Acuna" },
]

const UserList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">User List</h2>
        <DialogPage>
          <Button size="sm">
            <IconGitBranch className="mr-2 h-4 w-4" />
            Add User
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

export default memo(UserList)
