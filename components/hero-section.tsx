import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/0 to-background/25 pointer-events-none" />
      <div className="container flex flex-col items-center text-center pt-20 pb-16">
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6">
          <span className="text-primary">Financial Intelligence</span>
          <div className="mx-2 h-4 w-px bg-muted" />
          <span className="">Powered by Multi-Agent LLMs</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          FinSight: Financial LLM War Room
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
          The AI that helps you outthink hedge funds
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              <TrendingUp className="mr-2 h-5 w-5" />
              Enter War Room
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#demo">
              See Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
