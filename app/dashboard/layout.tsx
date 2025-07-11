import { AppSidebar } from "@/components/common/Sidebar";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full pt-[70px]">
      <SidebarProvider >
        <AppSidebar />
        <div className="relative p-10   h-full w-full">
          <SidebarTrigger className="absolute top-1 left-1" />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
