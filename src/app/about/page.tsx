import { AnimatedSection } from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <main className="page-main">
      <AnimatedSection className="section page-intro">
        <p className="eyebrow">About</p>
        <h1>Finding quiet moments in the open landscape</h1>
        <p>
          Prairie Light Photography focuses on atmospheric landscapes, rural
          scenes, and the changing weather that shapes the central U.S.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section two-column">
        <div>
          <h2>Artist Statement</h2>
          <p>
            My work centers on scale, weather, and light. I photograph places
            that feel both timeless and fragile, where sky and land carry equal
            weight.
          </p>
          <p>
            Each image is composed to preserve the feeling of being present:
            wind moving through grass, distant storm bands, and long evening
            shadows.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          <ul className="plain-list">
            <li>Fine-art prints in multiple formats</li>
            <li>Image licensing for editorial and commercial use</li>
            <li>Curated collections for hospitality and offices</li>
            <li>Commissioned landscape assignments</li>
          </ul>
        </div>
      </AnimatedSection>
    </main>
  );
}
