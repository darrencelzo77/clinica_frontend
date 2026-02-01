"use client"

import * as React from "react"
import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
    type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// ------------------
// Mock Data
// ------------------
const data: CaseRow[] = [
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
        id: "3",
        caseNumber: "CASE-1003",
        patientName: "Cheska Lim",
        doctorAssigned: "Dr. Tan",
        processedBy: "Admin John",
        status: "closed",
    },
    {
        id: "3",
        caseNumber: "CASE-1004",
        patientName: "Cheska Lim",
        doctorAssigned: "Dr. Darren",
        processedBy: "Admin John",
        status: "closed",
    },
    {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
     {
        id: "4",
        caseNumber: "CASE-1005",
        patientName: "Alfredo Lim",
        doctorAssigned: "Dr. G",
        processedBy: "Admin John",
        status: "closed",
    },
]

// ------------------
// Type
// ------------------
export type CaseRow = {
    id: string
    caseNumber: string
    patientName: string
    doctorAssigned: string
    processedBy: string
    status: "open" | "in-progress" | "closed"
}

// ------------------
// Columns
// ------------------
export const columns: ColumnDef<CaseRow>[] = [
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
        accessorKey: "caseNumber",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Case #
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="font-mono">{row.getValue("caseNumber")}</div>,
    },
    {
        accessorKey: "patientName",
        header: "Patient Name",
        cell: ({ row }) => <div>{row.getValue("patientName")}</div>,
    },
    {
        accessorKey: "doctorAssigned",
        header: "Doctor Assigned",
        cell: ({ row }) => <div>{row.getValue("doctorAssigned")}</div>,
    },
    {
        accessorKey: "processedBy",
        header: "Processed By",
        cell: ({ row }) => <div>{row.getValue("processedBy")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const caseRow = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-3 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Case Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(caseRow.caseNumber)}
                        >
                            Copy Case #
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Case</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

// ------------------
// Component
// ------------------
export function TableCase() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter patient name..."
                    value={(table.getColumn("patientName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("patientName")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
