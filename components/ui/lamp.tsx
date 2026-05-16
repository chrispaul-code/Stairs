"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative z-50 flex flex-col items-center"
      >
        {/* SMALL TITLE */}
        <p className="mb-4 tracking-[0.35em] uppercase text-[#E6382E] text-sm font-semibold">
          Partners
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-center leading-none font-black uppercase">
          <span className="block text-black text-5xl md:text-7xl tracking-tight">
            SPORTS
          </span>

          <span className="block italic text-[#E6382E] text-5xl md:text-7xl tracking-tight">
            ORGANISATIONS
          </span>

          <span className="block text-black text-4xl md:text-6xl mt-3 tracking-tight">
            WE HAVE WORKED WITH
          </span>
        </h1>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[32rem] w-full flex-col items-center justify-start overflow-hidden bg-white rounded-[2rem]",
        className
      )}
    >
      {/* TOP LIGHT LINE */}
      <motion.div
        initial={{ width: "8rem", opacity: 0 }}
        whileInView={{ width: "34rem", opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-24 z-30 h-[2px] bg-[#E6382E]"
      />

      {/* MAIN RED GLOW */}
      <div className="absolute top-16 h-56 w-[34rem] rounded-full bg-[#E6382E] opacity-25 blur-[120px]" />

      {/* LEFT LIGHT CONE */}
      <motion.div
        initial={{ opacity: 0.3, width: "10rem" }}
        whileInView={{ opacity: 1, width: "28rem" }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute right-1/2 top-24 h-72 w-[28rem] bg-gradient-conic from-[#E6382E] via-transparent to-transparent opacity-80 [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute bottom-0 left-0 h-44 w-full bg-white [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute bottom-0 left-0 h-full w-40 bg-white [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>

      {/* RIGHT LIGHT CONE */}
      <motion.div
        initial={{ opacity: 0.3, width: "10rem" }}
        whileInView={{ opacity: 1, width: "28rem" }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute left-1/2 top-24 h-72 w-[28rem] bg-gradient-conic from-transparent via-transparent to-[#E6382E] opacity-80 [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute bottom-0 right-0 h-44 w-full bg-white [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute bottom-0 right-0 h-full w-40 bg-white [mask-image:linear-gradient(to_left,white,transparent)]" />
      </motion.div>

      {/* CENTER SOFT GLOW */}
      <div className="absolute top-32 z-20 h-40 w-[32rem] rounded-full bg-[#E6382E] opacity-20 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-50 mt-28 flex flex-col items-center px-5 text-center">
        {children}
      </div>
    </div>
  );
};