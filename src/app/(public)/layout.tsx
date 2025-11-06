import GlobalFooter from "@components/globalComponents/globalFooter";
import GlobalHeader from "@components/globalComponents/globalHeader";
import React from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (<div>

    <GlobalHeader />
    {children}
    <GlobalFooter />
  </div>);
}
