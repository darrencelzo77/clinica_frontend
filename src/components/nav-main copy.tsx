"use client"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

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
  name?: string
  url: string
  icon?: LucideIcon
  isActive?: boolean // optional manual control
}

type ParentItem = SimpleItem & {
  items?: { title: string; url: string }[]
}

export function NavMain({ items }: { items: ParentItem[] }) {
  const location = useLocation()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const label = item.title ?? item.name ?? "Untitled"
          const hasChildren = Array.isArray(item.items) && item.items.length > 0

          if (!hasChildren) {
            // Simple link (no dropdown)
            return (
              <SidebarMenuItem key={item.url || label}>
                <NavLink to={item.url} end>
                  {({ isActive }) => (
                    <SidebarMenuButton
                      asChild
                      tooltip={label}
                      // router controls active unless manually forced
                      isActive={item.isActive ?? isActive}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon />}
                        <span>{label}</span>
                      </div>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            )
          }

          // Collapsible (with children)
          const childUrls = item.items?.map((s) => s.url) ?? []
          const isOnChild = childUrls.some((u) => location.pathname.startsWith(u))
          const openByDefault = item.isActive ?? isOnChild

          return (
            <Collapsible
              key={item.url || label}
              asChild
              defaultOpen={openByDefault}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={label} /* parent button not a link */>
                    {item.icon && <item.icon />}
                    <span>{label}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((sub) => (
                      <SidebarMenuSubItem key={sub.url || sub.title}>
                        <NavLink to={sub.url} end>
                          {({ isActive }) => (
                            <SidebarMenuSubButton asChild isActive={isActive}>
                              <div>
                                <span>{sub.title}</span>
                              </div>
                            </SidebarMenuSubButton>
                          )}
                        </NavLink>
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
