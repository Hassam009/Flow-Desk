import CustomSidebar from "./SharedComponent/CustomSidebar";
import CustomNav from "./SharedComponent/CustomNav";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

function MainContent({ children }: { children?: React.ReactNode }) {
  const { state } = useSidebar(); 
  const location = useLocation();
  const isMobile = useIsMobile();
  let leftMargin = "0px";
  if (!isMobile) {
    leftMargin = state === "collapsed" ? "50px" : "240px";
  }
  
  const isChatPage = location.pathname.toLowerCase().includes("chat");
  return (
    <main
      className={`flex-1 min-h-0 flex flex-col transition-all duration-300 bg-zinc-800 ${isChatPage ? "overflow-hidden" : "overflow-y-auto"}`}
      style={{ marginLeft: leftMargin }}
    >
      {children}
    </main>
  );
}

export default function AppShell({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full">
        <CustomNav /> {/* Should have a fixed height, e.g., h-16 */}
        <div className="flex flex-1 min-h-0">
          <CustomSidebar />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </SidebarProvider>
  );
}
