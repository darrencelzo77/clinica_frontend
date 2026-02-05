import * as React from "react"
import {
  LayoutDashboard,   // Dashboard
  ClipboardList,     // Queue
  Stethoscope,       // Doctors
  GalleryVerticalEnd,
  Settings2,
  FileCog,           // Procedures
  Users,             // Patients List 👥
  KeySquare,
  CreditCard,
  ShoppingCart,
  CalendarCheck,
  UserCheck,
  HeartPulse,         // External Access 🔑
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// AppSidebar.tsx
const data = {
  user: {
    name: "darren",
    email: "darren@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Clinic MS",
      logo: GalleryVerticalEnd,
      plan: "Admin Panel",
    },
  ],
  navMain: [
    {
      name: "Dashboard",
      url: "/app",
      icon: LayoutDashboard,
    },



    {
      name: "Senior Queue",
      url: "/queue1",
      icon: UserCheck, // represents a single user, good for seniors
    },
    {
      name: "Corporate Queue",
      url: "/queue2",
      icon: Users, // represents a group, good for corporate
    },
    {
      name: "Patient Queue",
      url: "/queue3",
      icon: HeartPulse, // represents health, good for patients
    },


    
    {
      name: "Patients List",
      url: "/patient",
      icon: Users,          // 👥 group
    },
    {
      name: "Doctors Queue",
      url: "/cases",
      icon: ClipboardList,
    },
    {
      name: "Employee List",
      url: "/employee-list",
      icon: Stethoscope,    // 🩺
    },
    {
      name: "Procedures",
      url: "/procedure",
      icon: FileCog,        // ⚙️📄
    },
    {
      name: "Generate External Access",
      url: "/external-access",
      icon: KeySquare,      // 🔑 box
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "Department", url: "/settings/department" },
        { title: "Branch", url: "/settings/branch" },
        { title: "Users List", url: "/settings/users-list" },
      ],
    },
    {
      name: "Payments",
      url: "#",
      icon: CreditCard,
      disabled: true,        // mark as disabled
      tooltip: "Requires purchase", // optional tooltip
    },
    {
      name: "Inventory",
      url: "#",
      icon: ShoppingCart,
      disabled: true,
      tooltip: "Requires purchase",
    },
    {
      name: "Online Appointment",
      url: "#",
      icon: CalendarCheck,
      disabled: true,
      tooltip: "Requires purchase",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
