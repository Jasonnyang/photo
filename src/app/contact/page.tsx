import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <main className="page-main">
      <AnimatedSection className="section page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Print orders, licensing, and commissions</h1>
        <p>
          Share what you are looking for and I will help you find the right
          image, size, and finish.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section contact-card">
        <div>
          <h2>Get in touch</h2>
          <p>Email: hello@prairielightphoto.com</p>
          <p>Instagram: @prairielightphoto</p>
          <p>Response time: usually within 1-2 business days.</p>
        </div>
        <form className="contact-form" aria-label="Contact form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me what you need..."
          />
          <button type="button" className="button primary">
            Send Inquiry
          </button>
        </form>
      </AnimatedSection>
    </main>
  );
}
