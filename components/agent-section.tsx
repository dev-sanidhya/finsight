import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FishIcon as Shark, TrendingUp, Users, Newspaper } from "lucide-react"

export function AgentSection() {
  return (
    <section className="container" id="agents">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Your Financial Agents</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each agent provides a different perspective on your financial data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <Shark className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Hedge Fund Analyst</CardTitle>
            <CardDescription>Deep dive, red flags, aggressive takes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Scrutinizes financial data with a critical eye, identifying potential risks and opportunities that others
              might miss.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Sell-Side Analyst</CardTitle>
            <CardDescription>Balanced, risk/reward analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Provides a measured assessment of financial assets, weighing both positive and negative factors to deliver
              a balanced view.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Retail Investor</CardTitle>
            <CardDescription>Simplified, meme-stock risk factors</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Translates complex financial information into accessible insights, with an eye for social trends and
              retail sentiment.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <Newspaper className="h-8 w-8 text-primary mb-2" />
            <CardTitle>News Digest Bot</CardTitle>
            <CardDescription>Cross-references news, social sentiment</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Aggregates and analyzes news coverage and social media sentiment to provide context for financial
              decisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
