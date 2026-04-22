import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container = ({ children, className, as: Component = "div" }: ContainerProps) => {
  return (
    <Component className={cn("container-custom", className)}>
      {children}
    </Component>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  containerClassName?: string;
}

export const Section = ({ 
  children, 
  className, 
  id, 
  as: Component = "section",
  containerClassName
}: SectionProps) => {
  return (
    <Component id={id} className={cn("section-padding", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
};
