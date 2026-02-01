import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import type { CaseData } from "@/types/type"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export const columns: ColumnDef<CaseData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "caseNumber",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Case #
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "patientName",
        header: "Patient",
    },
    {
        accessorKey: "doctorAssigned",
        header: "Doctor",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const caseRow = row.original;

            return (
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        className="p-0 h-4 w-4"
                        onClick={() => alert(`View ${caseRow.caseNumber}`)}
                    >
                        <Eye className="h-3 w-3" />
                    </Button>
                    <Button
                        variant="ghost"
                        className="p-0 h-4 w-4"
                        onClick={() => alert(`Edit ${caseRow.caseNumber}`)}
                    >
                        <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                        variant="ghost"
                        className="p-0 h-4 w-4"
                        onClick={() => alert(`Delete ${caseRow.caseNumber}`)}
                    >
                        <Trash className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const caseRow = row.original;

            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="h-3 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent align="end" className="w-44 p-1">
                        <div className="flex flex-col space-y-1">
                            <span className="px-2 py-1 text-sm font-medium text-muted-foreground">
                                Case Actions
                            </span>
                            <Button
                                variant="ghost"
                                className="justify-start rounded-none"
                                onClick={() => navigator.clipboard.writeText(caseRow.caseNumber)}
                            >
                                Copy Case #
                            </Button>
                            <div className="border-t border-border" />
                            <Button variant="ghost" className="justify-start rounded-none">
                                View Details
                            </Button>
                            <Button variant="ghost" className="justify-start rounded-none">
                                Edit Case
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            );
        },
    }


]
