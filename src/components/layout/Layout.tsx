import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppInquiryWidget } from "@/components/common/WhatsAppInquiryWidget";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      <InteractiveCursor />
      <Header />
      <main className="flex-1 pt-16 lg:pt-18">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppInquiryWidget />
    </div>
  );
}