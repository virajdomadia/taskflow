"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fadeUp } from "@/lib/animations";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "feature" | "testimonial" | "pricing";
  children: React.ReactNode;
}

export const Card = ({ className, variant = "feature", children, ...props }: CardProps) => {
  const variants = {
    feature: "bg-white border border-gray-200 p-8 hover:border-brand-primary/50",
    testimonial: "bg-gray-50 border-none p-8 italic text-gray-700",
    pricing: "bg-white border-2 border-gray-200 p-10 hover:border-brand-primary",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(
        "rounded-lg transition-all duration-300 shadow-sm hover:shadow-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
