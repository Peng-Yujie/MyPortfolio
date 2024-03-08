import React, { useState, createContext, useContext } from "react";
import { links } from "../lib/data";

type ActiveSection = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
type ActiveSectionProviderProps = {
  children: React.ReactNode;
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
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<ActiveSection>("Home");
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
