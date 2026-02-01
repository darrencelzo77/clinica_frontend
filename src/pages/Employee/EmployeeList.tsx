import { memo } from "react";
import { Button } from "@/components/ui/button";
import { DialogPage } from "@/components/reusable/DialogPage";
import { IconGitBranch } from "@tabler/icons-react";
import { ReusableTable } from "@/components/reusable/Table/ReusableTable";
import { columns } from "./Columns";
import type { EmployeeData } from "@/types/type";

const data: EmployeeData[] = [
  {
    id: "1",
    no: "01",
    name: "Alice Santos",
    specialty: "Cardio",
    email: "alice@email.com",
    department: "Neurology Department",
  },
  {
    id: "2",
    no: "02",
    name: "Brian Cruz",
    specialty: "Orthopedic",
    email: "brian.cruz@email.com",
    department: "Orthopedics Department",
  },
  {
    id: "3",
    no: "03",
    name: "Carla Mendoza",
    specialty: "Pediatrics",
    email: "carla.mendoza@email.com",
    department: "Pediatrics Department",
  },
  {
    id: "4",
    no: "04",
    name: "Daniel Reyes",
    specialty: "Dermatology",
    email: "daniel.reyes@email.com",
    department: "Dermatology Department",
  },
  {
    id: "5",
    no: "05",
    name: "Elaine Navarro",
    specialty: "Neurology",
    email: "elaine.navarro@email.com",
    department: "Neurology Department",
  },
  {
    id: "6",
    no: "06",
    name: "Francis Dela Cruz",
    specialty: "Radiology",
    email: "francis.delacruz@email.com",
    department: "Radiology Department",
  },
  {
    id: "7",
    no: "07",
    name: "Grace Lim",
    specialty: "Oncology",
    email: "grace.lim@email.com",
    department: "Oncology Department",
  },
  {
    id: "8",
    no: "08",
    name: "Harold Tan",
    specialty: "Anesthesiology",
    email: "harold.tan@email.com",
    department: "Anesthesiology Department",
  },
  {
    id: "9",
    no: "09",
    name: "Ivy Chua",
    specialty: "Psychiatry",
    email: "ivy.chua@email.com",
    department: "Psychiatry Department",
  },
  {
    id: "10",
    no: "10",
    name: "Jason Ong",
    specialty: "Emergency Medicine",
    email: "jason.ong@email.com",
    department: "Emergency Department",
  },
  {
    id: "11",
    no: "11",
    name: "Karen Bautista",
    specialty: "Internal Medicine",
    email: "karen.bautista@email.com",
    department: "Internal Medicine Department",
  },
]




const EmployeeList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Employee List</h2>

        <DialogPage>
          <Button size="sm">
            <IconGitBranch className="mr-2 h-4 w-4" />
            Add New Employee
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
};

export default memo(EmployeeList);
