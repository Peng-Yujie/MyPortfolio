"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";
import { links } from "@/lib/data";

type ActiveSection = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
}

export default function ActiveSectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ActiveSection>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
