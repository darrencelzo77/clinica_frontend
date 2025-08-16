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

// This is sample data.
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
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Case List",
      url: "#",
      icon: ClipboardList,
    },
    {
      name: "Patients List",
      url: "#",
      icon: Users,
    },
    {
      name: "Doctor List",
      url: "#",
      icon: Stethoscope,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Department", url: "#" },
        { title: "Branch", url: "#" },
        { title: "Package", url: "#" },
        { title: "Procedures", url: "#" },
        { title: "Users List", url: "#" },
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
