import * as React from "react"
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Stethoscope,
  GalleryVerticalEnd,
  Settings2,
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
      url: "/app",            // ✅ now routes to Dashboard
      icon: LayoutDashboard,
    },
    {
      name: "Case List",
      url: "/cases",      // ✅ CaseList page
      icon: ClipboardList,
    },
    {
      name: "Patients List",
      url: "/patient",   // ✅ Patients page
      icon: Users,
    },
    {
      name: "Doctor List",
      url: "/doctors",    // ✅ Doctors page
      icon: Stethoscope,
    },
    {
      title: "Settings",
      url: "/settings",   // ✅ parent route (optional)
      icon: Settings2,
      items: [
        { title: "Department", url: "/settings/department" },
        { title: "Branch", url: "/settings/branch" },
        { title: "Package", url: "/settings/package" },
        { title: "Procedures", url: "/settings/procedures" },
        { title: "Users List", url: "/settings/users" },
      ],
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
