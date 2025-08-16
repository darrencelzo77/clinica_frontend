"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { type ReactNode } from "react"

export function DialogPage({ children }: { children: ReactNode }) {
    return (
        <Dialog>
            {/* Whatever you pass in PatientList will become the trigger */}
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Patient</DialogTitle>
                    <DialogDescription>
                        Fill in the patient information below and save.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">First Name</Label>
                        <Input id="name" name="name" placeholder="Patient name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Middle Name</Label>
                        <Input id="name" name="name" placeholder="Patient name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Last Name</Label>
                        <Input id="name" name="name" placeholder="Patient name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" placeholder="patient@email.com" />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
