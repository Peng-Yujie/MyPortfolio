import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor?: string | undefined;
  href?: string;
}

const SocialButton: React.FC<Props> = ({
  children,
  bgColor = "f8fafb",
  href,
}) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "resume":
      bgHoverColorClass = "hover:bg-resume dark:hover:bg-resume";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin dark:hover:bg-linkedin";
      break;
    case "github":
      bgHoverColorClass = "hover:bg-github dark:hover:bg-github";
      break;
    default:
      bgHoverColorClass = "hover:bg-github dark:hover:bg-github";
  }

  return (
    <a
      className={`h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center text-black hover:text-white`}
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
};

export default SocialButton;
