"use client"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { NavLink } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

type SimpleItem = {
  title?: string
  name?: string               // support your "Dashboard" shape
  url: string
  icon?: LucideIcon
  isActive?: boolean          // optional manual control
}

type ParentItem = SimpleItem & {
  items?: { title: string; url: string }[]
}

export function NavMain({ items }: { items: ParentItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const label = item.title ?? item.name ?? "Untitled"
          const hasChildren = Array.isArray(item.items) && item.items.length > 0

          if (!hasChildren) {
            // 👉 Simple link (NO DROPDOWN)
            return (
              <SidebarMenuItem key={label}>
                <SidebarMenuButton asChild tooltip={label} isActive={item.isActive}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      // let router control active state unless isActive is forced
                      item.isActive ?? isActive ? "data-[active=true]" : undefined
                    }
                  >
                    {item.icon && <item.icon />}
                    <span>{label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // 👇 Collapsible (DROPDOWN) for items with children
          return (
            <Collapsible
              key={label}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={label}>
                    {item.icon && <item.icon />}
                    <span>{label}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuSubButton asChild>
                          <NavLink to={sub.url}>
                            <span>{sub.title}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
