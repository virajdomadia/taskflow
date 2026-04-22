import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const HeroTitle = ({ children, className, as: Component = "h1" }: TypographyProps) => (
  <Component className={cn("text-hero md:text-hero font-bold tracking-tight text-gray-900", className)}>
    {children}
  </Component>
);

export const SectionTitle = ({ children, className, as: Component = "h2" }: TypographyProps) => (
  <Component className={cn("text-section md:text-section font-bold tracking-tight text-gray-900", className)}>
    {children}
  </Component>
);

export const BodyText = ({ children, className, as: Component = "p" }: TypographyProps) => (
  <Component className={cn("text-body text-gray-600 max-w-[70ch]", className)}>
    {children}
  </Component>
);

export const SmallText = ({ children, className, as: Component = "span" }: TypographyProps) => (
  <Component className={cn("text-small font-medium text-gray-500", className)}>
    {children}
  </Component>
);
