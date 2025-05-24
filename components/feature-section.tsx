import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, LineChart, Zap } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="container" id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Why FinSight Stands Out</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A multi-agent LLM system that brings human-like thinking styles into financial decision-making
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Multi-Agent Intelligence</CardTitle>
            <CardDescription>Leveraging cutting-edge multi-agent LLM systems like AutoGPT and CrewAI</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our system simulates the behavior of hedge fund analysts, market strategists, and retail investors to give
              you a comprehensive view of financial decisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Human-Like Thinking</CardTitle>
            <CardDescription>Diverse perspectives from different financial personas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Each agent provides a unique lens on your financial data, from aggressive hedge fund takes to simplified
              retail investor perspectives.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <LineChart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Visual War Room</CardTitle>
            <CardDescription>Interactive, visually engaging financial analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Watch as our AI agents debate in a virtual meeting room, providing visual insights into complex financial
              decisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Practical Utility</CardTitle>
            <CardDescription>Like having a mini McKinsey in your laptop</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get actionable insights and recommendations that help you make informed financial decisions with
              confidence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
