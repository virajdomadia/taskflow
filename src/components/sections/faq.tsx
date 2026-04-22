"use client";

import React from "react";

import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ_DATA = [
  {
    question: "Is there a free trial?",
    answer: "Yes. You can start with the free plan and upgrade anytime as your team grows.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts—you can cancel or downgrade whenever you want.",
  },
  {
    question: "How is TaskFlow different from tools like Asana or Notion?",
    answer: "TaskFlow is built for simplicity. It gives small teams the structure they need without the complexity or setup overhead of larger tools.",
  },
  {
    question: "How long does it take to get started?",
    answer: "Most teams are up and running in under 10 minutes. No training or setup required.",
  },
  {
    question: "Can I import my existing tasks?",
    answer: "Yes. You can easily bring in tasks from spreadsheets or other tools.",
  },
  {
    question: "Does TaskFlow work for remote teams?",
    answer: "Yes. TaskFlow is designed to keep distributed teams aligned with clear ownership and real-time visibility.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 md:py-40 bg-slate-900/30" id="faq">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Frequently <span className="text-emerald-gradient italic">Asked Questions</span>
            </h2>
            <p className="max-w-xl mx-auto">
              Everything you need to know about TaskFlow and how it can help your team.
            </p>
          </motion.div>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion items={FAQ_DATA} />
        </div>
      </Container>
    </section>
  );
};

