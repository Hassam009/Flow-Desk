import CustomSidebar from "./SharedComponent/CustomSidebar";
import CustomNav from "./SharedComponent/CustomNav";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

function MainContent({ children }: { children?: React.ReactNode }) {
  const { state } = useSidebar(); // 'expanded' or 'collapsed'

  const leftMargin = state === "collapsed" ? "60px" : "260px";

  return (
    <main
      className="flex-1 w-full min-w-0 flex flex-col overflow-y-auto transition-all duration-300"
      style={{ marginLeft: leftMargin }}
    >
      {children}
    </main>
  );
}

export default function AppShell({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full bg-gray-50">
        <CustomNav />
        <div className="flex flex-1">
          <CustomSidebar />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </SidebarProvider>
  );
}
