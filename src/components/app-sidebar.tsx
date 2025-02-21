"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  School,
  Send,
  Settings2,
  SquareTerminal,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Tableau de bord",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "classe",
          url: "#",
        },
        {
          title: "eleve",
          url: "#",
        },
        {
          title: "Inscription",
          url: "#",
        },
      ],
    },
    {
      title: "Classes",
      url: "#",
      icon: School,
      items: [
        {
          title: "Liste",
          url: "#",
        },
        {
          title: "Ajout",
          url: "#",
        },
        {
          title: "Mis à jour",
          url: "#",
        },
      ],
    },
    {
      title: "Eleves",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Liste",
          url: "#",
        },
        {
          title: "Ajout",
          url: "#",
        },
        {
          title: "Mis à jour",
          url: "#",
        },
      ],
    },
    {
      title: "Inscriptions",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Liste",
          url: "#",
        },
        {
          title: "Ajout",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
