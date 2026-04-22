import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>Copyright {new Date().getFullYear()} Prairie Light Photography.</p>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">License Images</Link>
          <Link href="/galleries">Shop Galleries</Link>
        </div>
      </div>
    </footer>
  );
}
