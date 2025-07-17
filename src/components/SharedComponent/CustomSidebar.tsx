import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger,
} from "../ui/sidebar";
import { AppWindow } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import AllIcons from "./AllIcons";

export default function CustomSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  return (
    <Sidebar
      collapsible="icon"
      data-state={state}
      className={cn(
        "bg-white border-r h-full shadow-sm rounded-r-xl  bg-white dark:bg-zinc-800",
        state === "collapsed" ? "w-[48px]" : "w-60"
      )}
    >
      <div className="p-4 border-b flex flex-col">
        <span className="font-bold text-lg">
          {state === "collapsed" ? "M" : "MyApp"}
        </span>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "items-center px-3 py-2 rounded-md w-full transition-colors",
                    location.pathname === "/Dashboard"
                    ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                    : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  )}
                >
                  <Link to="/Dashboard">
                    <AllIcons name="dashboard" />
                    {state !== "collapsed" && <span>Dashboard</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                    location.pathname === "/TaskPage"
                    ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                    : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  )}
                >
                  <Link to="/TaskPage">
                    <AllIcons name="tasks" />
                    {state === "collapsed" ? "" : "Tasks"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                    location.pathname === "/AppPage"
                    ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                    : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  )}
                >
                  <Link to="/AppPage">
                    <AllIcons name="apps" />
                    {state === "collapsed" ? "" : "Apps"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                    location.pathname === "/AppPage"
                    ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                    : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  )}
                >
                  <Link
                    to="/UserPage"
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                      location.pathname === "/UserPage"
                      ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                      : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                    )}
                  >
                    <AllIcons name="users" />
                    {state === "collapsed" ? "" : "User"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                    location.pathname === "/Chats"
                    ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
                    : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  )}
                >
                  <Link to="/Chats">
                    <AllIcons name="users" />
                    {state === "collapsed" ? "" : "Chats"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={cn(
                      "flex items-center px-3 py-2 rounded-md w-full transition-colors",
                      location.pathname === "/"
                      ? "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-white"
  : "hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                    )}>
                  <Link
                    to="/"
                    
                  >
                    <AppWindow className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Logout"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarTrigger className="md:hidden" />
    </Sidebar>
  );
}
