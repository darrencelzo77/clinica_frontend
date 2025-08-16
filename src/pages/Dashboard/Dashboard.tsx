"use client"

import { memo } from "react"
import {
    Activity,
    ArrowUpRight,
    CreditCard,
    Users,
    ClipboardList,
    Stethoscope,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data (replace with real data later)
const recentCases = [
    { id: "CASE-1005", patient: "Alice Santos", status: "Open", doctor: "Dr. Lim" },
    { id: "CASE-1004", patient: "Ben Cruz", status: "In Progress", doctor: "Dr. Reyes" },
    { id: "CASE-1003", patient: "Cheska Lim", status: "Closed", doctor: "Dr. Tan" },
    { id: "CASE-1002", patient: "Diego Reyes", status: "Open", doctor: "Dr. Sy" },
]

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">Overview of today’s clinic activity.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Export</Button>
                    <Button>
                        New Report
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* KPI cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Patients Today</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">+12.5% from yesterday</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Cases</CardTitle>
                        <ClipboardList className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">46</div>
                        <p className="text-xs text-muted-foreground">8 new today</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Procedures Scheduled</CardTitle>
                        <Stethoscope className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">Most common: ECG</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue (Today)</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₱84,520</div>
                        <p className="text-xs text-muted-foreground">+3.1% from yesterday</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main content */}
            <div className="grid gap-4 lg:grid-cols-7">
                {/* Left: Activity + Progress */}
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Today’s Activity</CardTitle>
                        <CardDescription>Admissions, follow-ups, and discharge summary.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* “Chart” stand-in using bars & progress to avoid external libs */}
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="h-24 w-3 rounded bg-muted">
                                        <div
                                            className="w-3 rounded bg-primary"
                                            style={{ height: `${20 + (i * 10) % 80}%` }}
                                        />
                                    </div>
                                    <span className="text-[10px] text-muted-foreground">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span>ECG</span>
                                <span className="text-muted-foreground">72%</span>
                            </div>
                            <Progress value={72} />
                            <div className="flex items-center justify-between text-sm">
                                <span>Laboratory</span>
                                <span className="text-muted-foreground">54%</span>
                            </div>
                            <Progress value={54} />
                            <div className="flex items-center justify-between text-sm">
                                <span>Ultrasound</span>
                                <span className="text-muted-foreground">38%</span>
                            </div>
                            <Progress value={38} />
                        </div>
                    </CardContent>
                </Card>

                {/* Right: Recent cases & team */}
                <div className="space-y-4 lg:col-span-3">
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle>Recent Cases</CardTitle>
                                <Badge variant="secondary">Last 24h</Badge>
                            </div>
                            <CardDescription>New and updated case tickets.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Case #</TableHead>
                                        <TableHead>Patient</TableHead>
                                        <TableHead>Doctor</TableHead>
                                        <TableHead className="text-right">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentCases.map((c) => (
                                        <TableRow key={c.id}>
                                            <TableCell className="font-mono">{c.id}</TableCell>
                                            <TableCell>{c.patient}</TableCell>
                                            <TableCell>{c.doctor}</TableCell>
                                            <TableCell className="text-right">
                                                <Badge
                                                    variant={
                                                        c.status === "Closed"
                                                            ? "default"
                                                            : c.status === "In Progress"
                                                                ? "secondary"
                                                                : "outline"
                                                    }
                                                >
                                                    {c.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle>On Duty</CardTitle>
                            <CardDescription>Current staff in the clinic</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { name: "Dr. Lim", role: "Cardiology", abbr: "DL" },
                                { name: "Dr. Reyes", role: "Internal Med", abbr: "DR" },
                                { name: "Nurse Joy", role: "Triage", abbr: "NJ" },
                            ].map((p) => (
                                <div key={p.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>{p.abbr}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium leading-none">{p.name}</div>
                                            <div className="text-xs text-muted-foreground">{p.role}</div>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        View
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Tabs section */}
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">
                        <Activity className="mr-2 h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Clinic Summary</CardTitle>
                            <CardDescription>Snapshot of today’s performance.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-md border p-3">
                                <div className="text-sm text-muted-foreground">Avg. Wait Time</div>
                                <div className="mt-2 text-2xl font-semibold">18m</div>
                            </div>
                            <div className="rounded-md border p-3">
                                <div className="text-sm text-muted-foreground">New Registrations</div>
                                <div className="mt-2 text-2xl font-semibold">37</div>
                            </div>
                            <div className="rounded-md border p-3">
                                <div className="text-sm text-muted-foreground">Follow-ups</div>
                                <div className="mt-2 text-2xl font-semibold">22</div>
                            </div>
                            <div className="rounded-md border p-3">
                                <div className="text-sm text-muted-foreground">Cancellations</div>
                                <div className="mt-2 text-2xl font-semibold">5</div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="reports">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reports</CardTitle>
                            <CardDescription>Generate and export clinic reports.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Button variant="outline">Daily Summary</Button>
                            <Button variant="outline">Case Breakdown</Button>
                            <Button variant="outline">Revenue by Dept</Button>
                            <Button variant="outline">Procedures</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="billing">
                    <Card>
                        <CardHeader>
                            <CardTitle>Billing</CardTitle>
                            <CardDescription>Quick access to billing tools.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Button variant="outline">Invoices</Button>
                            <Button variant="outline">Payments</Button>
                            <Button variant="outline">Refunds</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default memo(Dashboard)
