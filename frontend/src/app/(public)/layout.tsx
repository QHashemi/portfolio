import GlobalFooter from "@components/globalComponents/globalFooter";
import GlobalHeader from "@components/globalComponents/globalHeader";
import React from "react";
import Drawer from "@components/globalComponents/Drawer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{position:"relative"}}>

      <GlobalHeader />
      {children}
      <GlobalFooter />
    </div>);
}
