import { AnimatedSection } from "@/components/AnimatedSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryGroups } from "@/lib/photos";

export default function GalleriesPage() {
  return (
    <main className="page-main">
      <AnimatedSection className="section page-intro">
        <p className="eyebrow">Photo Galleries</p>
        <h1>Landscape and nature collections</h1>
        <p>
          Explore scenes from prairie mornings, open fields, winding roads, and
          dramatic weather across wide-open country.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section">
        <GalleryGrid groups={galleryGroups} />
      </AnimatedSection>
    </main>
  );
}
