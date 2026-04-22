"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-active shadow-sm",
      outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 active:bg-brand-primary/10",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-small rounded-sm",
      md: "px-6 py-3 text-body font-medium rounded-md",
      lg: "px-8 py-4 text-body font-bold rounded-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
