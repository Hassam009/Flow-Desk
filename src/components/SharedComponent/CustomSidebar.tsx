import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "../ui/sidebar";
import { AppWindow } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AllIcons from "./AllIcons";

export default function CustomSidebar() {
  const { state } = useSidebar();
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
                <SidebarMenuButton>
                <Link to="/Dashboard" className="flex items-center">
  <AllIcons name="dashboard" />
  {state === "collapsed" ? "" : "Dashboard"}
</Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/TaskPage" className="flex items-center">
                    <AllIcons name="tasks" />
                    {state === "collapsed" ? "" : "Tasks"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/AppPage" className="flex items-center">
                    <AllIcons name="apps" />
                    {state === "collapsed" ? "" : "Apps"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/UserPage" className="flex items-center">
                    <AllIcons name="users" />
                    {state === "collapsed" ? "" : "User"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/" className="flex items-center">
                    <AppWindow className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Login"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/Signup" className="flex items-center">
                    <AppWindow className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Signup"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
