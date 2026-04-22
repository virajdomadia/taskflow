"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { UserCheck, Activity, Folder, Sparkles, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

const features = [
  {
    title: "Clear Ownership",
    description: "Know exactly who is responsible for every task—no confusion, no dropped work.",
    icon: UserCheck,
  },
  {
    title: "Real-Time Visibility",
    description: "Instantly see what’s done, in progress, or stuck without asking your team.",
    icon: Activity,
  },
  {
    title: "Everything in One Place",
    description: "Tasks, updates, and files stay connected—no more digging through tools.",
    icon: Folder,
  },
  {
    title: "Simple, Not Overbuilt",
    description: "Get the structure you need without the complexity you don’t.",
    icon: Sparkles,
  },
  {
    title: "Built for Small Teams",
    description: "Designed for speed and clarity—not enterprise workflows.",
    icon: Users,
  },
  {
    title: "Less Tool Switching",
    description: "Replace scattered systems with one focused workspace.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#10B981_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Everything you need. <br className="hidden md:block" /> <span className="text-emerald-gradient italic">Nothing you don't.</span>
            </h2>
            <p className="max-w-xl mx-auto">
              Designed to help your team move faster and stay aligned without the learning curve.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="feature"
              className="flex flex-col items-start text-left group"
            >
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 group-hover:shadow-emerald-glow transition-all duration-300">
                <feature.icon className="h-7 w-7 text-emerald-500" strokeWidth={2} />
              </div>
              <h3 className="text-white mb-4">{feature.title}</h3>
              <p>
                {feature.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

