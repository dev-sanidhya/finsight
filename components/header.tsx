import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, BarChart2, TrendingUp, User, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signIn } from "@/auth";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Pricing
                </Link>
                <Link
                  href="/blogs"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Blogs
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">FinSight</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blogs
          </Link>
          <Link
            href="about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button> */}
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit" variant="ghost" size="icon" className="">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </form>

          <ThemeToggle />
          <Link href={"/dashboard"}>
            <Button variant="default" size="sm" className="hidden md:flex">
              <TrendingUp className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
