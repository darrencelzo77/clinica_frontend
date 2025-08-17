import * as React from "react"
import {
  LayoutDashboard,
  ClipboardList,
  Stethoscope,
  GalleryVerticalEnd,
  Settings2,
  FileCog,        // for Procedures
  Package,        // for Packages
  UserRound,      // for Patients (less generic than Users group icon)
  Key
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
      name: "Queue Dashboard",
      url: "/app",
      icon: LayoutDashboard,
    },
    {
      name: "Add Patient",
      url: "/add-patient",
      icon: UserRound,       // 👤 single person
    },
    {
      name: "Patient Queue",
      url: "/cases",
      icon: ClipboardList,
    },
    {
      name: "Doctors Queue",
      url: "/cases",
      icon: ClipboardList,
    },
    {
      name: "Patients List",
      url: "/patient",
      icon: UserRound,       // 👤 single person
    },
    {
      name: "Procedures",
      url: "/procedure",
      icon: FileCog,         // ⚙️ file/settings style
    },
    {
      name: "Doctor List",
      url: "/doctors",
      icon: Stethoscope,     // 🩺
    },
    {
      name: "Generate External Access",
      url: "/doctors",
      icon: Key,     // 🩺
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "Department", url: "/settings/department" },
        { title: "Branch", url: "/settings/branch" },
        { title: "Users List", url: "/settings/users" },
      ],
    },
  ]

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
