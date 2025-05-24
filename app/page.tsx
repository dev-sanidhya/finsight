import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { DemoSection } from "@/components/demo-section"
import { AgentSection } from "@/components/agent-section"
import { StackSection } from "@/components/stack-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <FeatureSection />
      <AgentSection />
      <DemoSection />
      <StackSection />
    </div>
  )
}
