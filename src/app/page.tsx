import { AnimatedSection } from "@/components/AnimatedSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { galleryGroups } from "@/lib/photos";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <AnimatedSection className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Collections</p>
          <h2>Wide-open spaces and prairie light.</h2>
          <p>
            A curated set of landscape galleries inspired by the Flint Hills
            and central U.S. countryside.
          </p>
        </div>
        <GalleryGrid groups={galleryGroups.slice(0, 6)} />
      </AnimatedSection>

      <AnimatedSection className="section alt-surface">
        <div className="promo">
          <div>
            <p className="eyebrow">Prints and Licensing</p>
            <h3>Bring the landscape home or into your next project.</h3>
            <p>
              Available as framed prints, canvas wraps, metal prints, and
              editorial/commercial licenses.
            </p>
          </div>
          <div className="promo-links">
            <Link href="/galleries" className="button primary">
              Shop Galleries
            </Link>
            <Link href="/contact" className="button secondary">
              License Images
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
