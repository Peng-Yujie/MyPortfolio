"use client";

import React from "react";
import GlassButton from "./GlassButton";

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  href?: string;
}

const SocialButton: React.FC<Props> = ({
  children,
  bgColor = "github",
  href,
}) => {
  // Hover color classes for brand colors
  let hoverColorClass = "";

  switch (bgColor) {
    case "resume":
      hoverColorClass = "hover:bg-resume! hover:text-white";
      break;
    case "linkedin":
      hoverColorClass = "hover:bg-linkedin! hover:text-white";
      break;
    case "github":
      hoverColorClass = "hover:bg-github! hover:text-white";
      break;
    default:
      hoverColorClass = "hover:bg-github! hover:text-white";
  }

  return (
    <GlassButton
      as="a"
      variant="liquid-icon"
      size="md"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={hoverColorClass}
      aria-label={`Visit my ${bgColor}`}
    >
      {children}
    </GlassButton>
  );
};

export default SocialButton;
