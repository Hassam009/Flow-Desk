"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { ThemeToggle } from "../ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CustomNav() {
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const leftPadding = !isMobile ? (state === "collapsed" ? "60px" : "260px") : undefined;

  return (
    <nav
      className="w-full border-b bg-white dark:bg-zinc-800"
      style={{ zIndex: 10 }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[4rem] px-4 md:px-8 py-2 gap-3"
        style={{ paddingLeft: leftPadding }}
      >
        {/* Left Section: Sidebar + Title + Nav Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="font-bold text-lg">Overview</span>
            </div>

            {/* Hamburger Icon - Only on mobile */}
            <button
              className="md:hidden ml-auto"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#customers"
                  className="font-medium hover:text-black"
                >
                  Customers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#products"
                  className="font-medium hover:text-black"
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#settings"
                  className="font-medium hover:text-black"
                >
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section: Search + Theme Toggle */}
        <div className="flex flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 w-full md:max-w-xs"
          />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-1/2 top-14 z-30 w-56 -translate-x-1/2 bg-white rounded-xl shadow-lg py-2 border">
          <a href="#overview" className="block px-4 py-2 text-gray-900 text-left hover:bg-gray-100 rounded transition">Overview</a>
          <a href="#customers" className="block px-4 py-2 text-gray-900 text-left hover:bg-gray-100 rounded transition">Customers</a>
          <a href="#products" className="block px-4 py-2 text-gray-900 text-left hover:bg-gray-100 rounded transition">Products</a>
          <a href="#settings" className="block px-4 py-2 text-gray-900 text-left hover:bg-gray-100 rounded transition">Settings</a>
        </div>
      )}
    </nav>
  );
}
