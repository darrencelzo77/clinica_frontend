import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import type { PatientData } from "@/types/type";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ServicesModal } from "./ServicesModal";

export const columns: ColumnDef<PatientData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
        accessorKey: "seriesId",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Series ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },

    { accessorKey: "firstName", header: "First Name" },
    { accessorKey: "middleName", header: "Middle Name" },
    { accessorKey: "lastName", header: "Last Name" },
    { accessorKey: "processedBy", header: "Processed By" },
    { accessorKey: "status", header: "Status" },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const caseRow = row.original; // ✅ FIXED

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

                            <ServicesModal
                                trigger={
                                    <Button
                                        variant="ghost"
                                        className="justify-start rounded-none"
                                    >
                                        Select Services
                                    </Button>
                                }
                                rowData={caseRow} // optional if you want to pass patient info
                            />
                        </div>
                    </PopoverContent>
                </Popover>
            );
        },
    },
];
