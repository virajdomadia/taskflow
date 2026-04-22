"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Product Manager",
    quote: "Before TaskFlow, we were juggling Slack and spreadsheets, and things kept slipping. Now everything is visible, and we actually hit deadlines consistently.",
    initials: "AR"
  },
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    quote: "I used to spend hours chasing updates. With TaskFlow, I can see progress instantly without interrupting my team.",
    initials: "RM"
  },
  {
    name: "Priya Nair",
    role: "Marketing Lead",
    quote: "Our campaigns felt chaotic before. Now everyone knows what they own, and execution is much smoother.",
    initials: "PN"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-40 relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Don't just take <span className="text-emerald-gradient italic">our word for it</span>
            </h2>
            <p className="max-w-xl mx-auto">
              See how teams like yours are hitting deadlines and staying organized.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="testimonial"
              className="flex flex-col h-full items-start text-left group hover:bg-slate-900/40 transition-all duration-300"
            >
              <div className="flex-grow">
                <p className="text-slate-300 font-medium leading-relaxed mb-10 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-sm shrink-0 shadow-emerald-glow">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

