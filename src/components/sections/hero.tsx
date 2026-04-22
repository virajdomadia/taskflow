"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DashboardMock } from "@/components/ui/dashboard-mock";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#10B981_0%,_transparent_40%)] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3B82F6_0%,_transparent_40%)] opacity-[0.05] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-[640px] flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-emerald-glow" />
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">Now in Public Beta</span>
              </div>
              
              <h1 className="text-balance">
                Finally, Task Management That <span className="text-emerald-gradient italic">Isn’t Overcomplicated</span>
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-lg">
                TaskFlow gives small teams a clear, simple way to plan and track work—without the clutter of traditional tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="px-10">
                Start Free
              </Button>
              <Button variant="outline" size="lg" className="px-10">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800" />
                ))}
              </div>
              <span>Trusted by 2,000+ teams worldwide</span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
             {/* Decorative glow behind dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl z-10 perspective-[1000px]"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <DashboardMock />
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

