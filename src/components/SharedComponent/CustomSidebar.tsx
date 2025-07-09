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
import { Home, List, AppWindow } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";


export default function CustomSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      data-state={state} 
      className={cn(
        "bg-white border-r h-full shadow-sm rounded-r-xl",
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
                  <Link to="/" className="flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Dashboard"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/TaskPage" className="flex items-center">
                    <List className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Tasks"}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/apps" className="flex items-center">
                    <AppWindow className="mr-2 h-4 w-4" />
                    {state === "collapsed" ? "" : "Apps"}
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
