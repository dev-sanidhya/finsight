import Link from "next/link";
import { BarChart2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">FinSight</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinSight Financial LLM War Room.
            All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link
            href="author"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blogs"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
