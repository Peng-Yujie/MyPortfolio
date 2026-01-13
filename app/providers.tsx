"use client";

import { ReactNode } from "react";
import ActiveSectionProvider from "@/context/active-section-context";
import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ActiveSectionProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </ActiveSectionProvider>
  );
}
