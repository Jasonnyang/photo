"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { GalleryGroup } from "@/types/photo";

type GalleryGridProps = {
  groups: GalleryGroup[];
};

export function GalleryGrid({ groups }: GalleryGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="gallery-grid"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? {} : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {groups.map((group) => (
        <motion.article
          key={group.slug}
          className="gallery-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover={
            prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.25 } }
          }
        >
          <Link href="/galleries" className="gallery-link">
            <div className="gallery-media">
              <Image
                src={group.cover.src}
                alt={group.cover.alt}
                fill
                sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-copy">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
