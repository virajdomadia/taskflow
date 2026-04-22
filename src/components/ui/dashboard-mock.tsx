"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, MoreHorizontal } from "lucide-react";

export function DashboardMock() {
  const tasks = [
    { id: 1, title: "Finalize brand guidelines", status: "done", assignee: "SK" },
    { id: 2, title: "Update landing page copy", status: "in-progress", assignee: "JD" },
    { id: 3, title: "Review Q3 marketing plan", status: "todo", assignee: "AM" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-slate-900/60 backdrop-blur-2xl rounded-2xl shadow-premium-xl border border-white/10 overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-emerald-glow"></div>
          <span className="text-sm font-semibold text-white">Current Sprint</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-slate-500" />
      </div>

      {/* Task List */}
      <div className="p-3 space-y-1">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
          >
            <button className="flex-shrink-0 focus:outline-none">
              {task.status === "done" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              ) : task.status === "in-progress" ? (
                <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"></div>
              ) : (
                <Circle className="w-5 h-5 text-slate-700" />
              )}
            </button>
            
            <span className={`flex-grow text-sm ${task.status === "done" ? "text-slate-600 line-through" : "text-slate-300 font-medium"}`}>
              {task.title}
            </span>
            
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-[10px] font-bold">
              {task.assignee}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="px-6 py-3 border-t border-white/5 bg-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors">+ Add new task</span>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

