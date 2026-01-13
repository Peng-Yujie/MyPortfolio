"use client";

import { ReactNode } from "react";
import ActiveSectionProvider from "@/context/active-section-context";
import { ThemeProvider } from "@/context/theme-context";
import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}
