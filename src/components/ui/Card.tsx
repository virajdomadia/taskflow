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
  variant?: "default" | "feature" | "testimonial" | "pricing" | "highlight";
  children: React.ReactNode;
}

export const Card = ({ className, variant = "default", children, ...props }: CardProps) => {
  const variants = {
    default: "bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 shadow-premium-sm",
    feature: "bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 shadow-premium-sm hover:border-emerald-500/30",
    testimonial: "bg-slate-900/20 backdrop-blur-md border border-white/5 p-8 text-slate-300",
    pricing: "bg-slate-900/60 backdrop-blur-xl border border-white/10 p-10 shadow-premium-md",
    highlight: "bg-slate-900/80 backdrop-blur-2xl border-2 border-emerald-500/50 p-10 shadow-emerald-glow relative overflow-hidden",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      whileHover={{ y: -6, boxShadow: "var(--shadow-premium-lg)" }}
      viewport={{ once: true }}

      className={cn(
        "rounded-2xl transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

