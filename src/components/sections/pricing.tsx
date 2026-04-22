"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check } from "lucide-react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for individuals and small teams.",
      features: [
        "Up to 5 users",
        "Core task management",
        "Kanban board",
        "Basic collaboration",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: isYearly ? "$6.40" : "$8",
      period: "/user/month",
      description: "Everything you need to scale your team.",
      features: [
        "Unlimited users",
        "Timeline & calendar views",
        "File sharing & comments",
        "Integrations (Slack, Google Drive)",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Scale",
      price: isYearly ? "$12" : "$15",
      period: "/user/month",
      description: "Advanced features for large organizations.",
      features: [
        "Automation",
        "Advanced insights",
        "Permissions & admin controls",
        "Priority support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-40 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Simple, <span className="text-emerald-gradient italic">transparent pricing</span>
            </h2>
            <p className="mb-10">
              Choose the plan that's right for your team.
            </p>
            
            <div className="flex items-center justify-center gap-4 bg-white/5 p-1 rounded-full w-fit mx-auto border border-white/5">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-emerald-500 text-slate-950 shadow-emerald-glow' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-emerald-500 text-slate-950 shadow-emerald-glow' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Yearly
                <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${isYearly ? 'bg-slate-950/20 text-slate-950' : 'bg-emerald-500/10 text-emerald-400'}`}>Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.highlighted ? "highlight" : "pricing"}
              className={`flex flex-col h-full group ${plan.highlighted ? 'md:scale-105 z-10' : 'hover:bg-slate-900/40 transition-all duration-300'}`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-6">
                  <span className="bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-emerald-glow">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-white">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-2 font-medium">{plan.description}</p>
              </div>
              
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 font-bold text-sm">{plan.period}</span>}
                </div>
                {plan.price !== "Free" && isYearly && (
                  <p className="text-xs text-emerald-400 mt-2 font-bold uppercase tracking-wider">Billed annually</p>
                )}
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-emerald-500/10 rounded-full p-1 shrink-0">
                      <Check className="w-3 h-3 text-emerald-500" strokeWidth={4} />
                    </div>
                    <span className="text-slate-400 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "primary" : "outline"} 
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

