"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.995 }
        }
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
        }
        exit={prefersReducedMotion ? { opacity: 0.98 } : { opacity: 0, y: -8, scale: 0.995 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
