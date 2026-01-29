"use client";

import React from "react";

type Variant = "default" | "icon" | "cta" | "primary" | "liquid-icon";
type Size = "sm" | "md" | "lg";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  target?: string;
  rel?: string;
}

const sizeClasses: Record<Size, { icon: string; cta: string; liquidIcon: string }> = {
  sm: {
    icon: "w-10 h-10",
    cta: "clamp(0.75rem, 1.25vw, 0.875rem)",
    liquidIcon: "0.875rem",
  },
  md: {
    icon: "w-12 h-12",
    cta: "clamp(0.875rem, 1.5vw, 1rem)",
    liquidIcon: "1rem",
  },
  lg: {
    icon: "w-14 h-14",
    cta: "clamp(1rem, 2vw, 1.25rem)",
    liquidIcon: "1.125rem",
  },
};

export default function GlassButton({
  children,
  variant = "default",
  size = "md",
  as = "button",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
  target,
  rel,
}: GlassButtonProps) {
  const Element = as === "a" ? "a" : "button";

  // CTA variant uses the full liquid-cta-wrap structure with shadow
  if (variant === "cta") {
    const ctaSizeStyle = {
      "--global--size": sizeClasses[size].cta,
    } as React.CSSProperties;

    if (as === "a") {
      return (
        <div className="liquid-cta-wrap" style={ctaSizeStyle}>
          <a
            href={href}
            target={target}
            rel={rel}
            className={className}
            aria-label={ariaLabel}
            onClick={onClick}
          >
            <span>{children}</span>
          </a>
          <div className="liquid-cta-shadow"></div>
        </div>
      );
    }

    return (
      <div className="liquid-cta-wrap" style={ctaSizeStyle}>
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={className}
          aria-label={ariaLabel}
        >
          <span>{children}</span>
        </button>
        <div className="liquid-cta-shadow"></div>
      </div>
    );
  }

  // Liquid Icon variant - circular icon button with full liquid glass effect
  if (variant === "liquid-icon") {
    const liquidIconStyle = {
      "--global--size": sizeClasses[size].liquidIcon,
    } as React.CSSProperties;

    const sizeClass = size === "sm" ? "liquid-icon-sm" : size === "lg" ? "liquid-icon-lg" : "";

    return (
      <div className={`liquid-icon-wrap ${sizeClass}`} style={liquidIconStyle}>
        <Element
          href={as === "a" ? href : undefined}
          target={as === "a" ? target : undefined}
          rel={as === "a" ? rel : undefined}
          type={as === "button" ? type : undefined}
          onClick={onClick}
          disabled={as === "button" ? disabled : undefined}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </Element>
        <div className="liquid-icon-shadow"></div>
      </div>
    );
  }

  // Icon variant - simple circular glass button (no shadow layer)
  if (variant === "icon") {
    const iconClasses = `glass-button ${sizeClasses[size].icon} rounded-full p-0 ${className}`;

    return (
      <Element
        href={as === "a" ? href : undefined}
        target={as === "a" ? target : undefined}
        rel={as === "a" ? rel : undefined}
        type={as === "button" ? type : undefined}
        onClick={onClick}
        disabled={as === "button" ? disabled : undefined}
        className={iconClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Element>
    );
  }

  // Primary variant - accent colored glass button
  if (variant === "primary") {
    const primaryClasses = `glass-button-primary ${className}`;

    return (
      <Element
        href={as === "a" ? href : undefined}
        target={as === "a" ? target : undefined}
        rel={as === "a" ? rel : undefined}
        type={as === "button" ? type : undefined}
        onClick={onClick}
        disabled={as === "button" ? disabled : undefined}
        className={primaryClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Element>
    );
  }

  // Default variant - simple glass button
  const defaultClasses = `glass-button ${className}`;

  return (
    <Element
      href={as === "a" ? href : undefined}
      target={as === "a" ? target : undefined}
      rel={as === "a" ? rel : undefined}
      type={as === "button" ? type : undefined}
      onClick={onClick}
      disabled={as === "button" ? disabled : undefined}
      className={defaultClasses}
      aria-label={ariaLabel}
    >
      {children}
    </Element>
  );
}
