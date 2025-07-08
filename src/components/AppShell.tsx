import CustomSidebar from "./layout/CustomSidebar";
import CustomNav from "./layout/CustomNav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppShell({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full bg-gray-50">
        <CustomNav />
        <div className="flex flex-1">
          <CustomSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}   