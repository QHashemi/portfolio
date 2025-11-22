"use client";

import React, { ReactNode, useState } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(true);

  return (
     <div>AdminLayout</div>
  );
}
