import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "../ui/navigation-menu";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export default function CustomNav() {
  const { state } = useSidebar();

  const leftPadding = state === "collapsed" ? "60px" : "260px";
  return (
    <nav className="w-full border-b bg-white" style={{ zIndex: 10 }}>
      <div className="flex justify-between items-center h-16 px-8" style={{  paddingLeft: leftPadding }}>
        <div className="flex items-center gap-6">
          <SidebarTrigger />
          <span className="font-bold text-lg">Overview</span>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#customers" className="font-medium text-gray-700 hover:text-black">
                  Customers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#products" className="font-medium text-gray-700 hover:text-black">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#settings" className="font-medium text-gray-700 hover:text-black">
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1"
          />
        </div>
      </div>
    </nav>
  );
}