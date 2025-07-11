import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "../ui/navigation-menu";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { ThemeToggle } from "../ThemeToggle"; // ⬅️ NEW

export default function CustomNav() {
  const { state } = useSidebar();
  const leftPadding = state === "collapsed" ? "60px" : "260px";

  return (
    <nav className="w-full border-b bg-white dark:bg-zinc-800" style={{ zIndex: 10 }}>
      <div
        className="flex justify-between items-center h-16 px-8"
        style={{ paddingLeft: leftPadding }}
      >
        <div className="flex items-center gap-6">
          <SidebarTrigger />
          <span className="font-bold text-lg">Overview</span>
          <NavigationMenu className=" bg-white dark:bg-zinc-800">
            <NavigationMenuList className="flex gap-4  bg-white dark:bg-zinc-800">
              <NavigationMenuItem className="bg-white dark:bg-zinc-800">
                <NavigationMenuLink href="#customers" className="font-medium  hover:text-black bg-white dark:bg-zinc-800">
                  Customers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#products" className="font-medium  hover:text-black">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#settings" className="font-medium  hover:text-black">
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right-side: Search + Theme Toggle */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1"
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
