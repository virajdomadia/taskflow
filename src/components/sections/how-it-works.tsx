"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Create Your Workspace",
    description: "Set up your team in seconds—no complex configuration required",
  },
  {
    number: "02",
    title: "Add and Assign Tasks",
    description: "Break work into tasks and assign clear ownership instantly",
  },
  {
    number: "03",
    title: "Track Progress in Real Time",
    description: "See what’s moving, what’s stuck, and what’s done—at a glance",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-40 bg-slate-900/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Simple steps <span className="text-emerald-gradient italic">to success</span>
            </h2>
            <p className="max-w-xl mx-auto">
              We've stripped away the complexity so you can focus on getting things done.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center md:items-start text-center md:text-left relative group"
            >
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-14 w-full h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
              )}
              
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 font-extrabold text-xl flex items-center justify-center mb-10 relative z-10 shrink-0 shadow-emerald-glow group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              
              <h3 className="text-white mb-4">{step.title}</h3>
              <p>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

