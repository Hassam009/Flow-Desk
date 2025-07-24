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
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";





export default function CustomNav() {
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const leftPadding = !isMobile ? (state === "collapsed" ? "60px" : "260px") : undefined;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        <div className="absolute lg:hidden right-4 top-14 z-30 w-56 bg-white rounded-xl shadow-lg py-2 border">
          <a href="#overview" className="mobile-dropdown">Overview</a>
          <a href="#customers" className="mobile-dropdown">Customers</a>
          <a href="#products" className="mobile-dropdown">Products</a>
          <a href="#settings" className="mobile-dropdown">Settings</a>
        </div>
      )}
    </nav>
  );
}
