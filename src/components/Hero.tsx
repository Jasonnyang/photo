import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Hero() {
  return (
    <AnimatedSection className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Landscape and Nature Photography</p>
        <h1>
          Photographs from the tallgrass prairie and other wide-open spaces.
        </h1>
        <p>
          Discover fine-art prints and licensed images that capture weather,
          light, and the quiet beauty of the central U.S.
        </p>
        <div className="hero-cta">
          <Link href="/galleries" className="button primary">
            View Galleries
          </Link>
          <Link href="/contact" className="button secondary">
            License Photos
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
