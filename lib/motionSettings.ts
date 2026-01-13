import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

export const useSectionInView = (section: SectionName) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  
  useEffect(() => {
    if (isInView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection(section);
    }
  }, [isInView, section, setActiveSection, timeOfLastClick]);
  
  return { ref };
};
