import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FishIcon as Shark, TrendingUp, Users, Newspaper, AlertTriangle, ThumbsUp } from "lucide-react"

export function DemoSection() {
  return (
    <section className="container" id="demo">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Demo Scenario</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how FinSight analyzes Tesla's Q4 2024 10-K and recent news
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-md bg-muted">
                <p className="font-mono text-sm">"Tesla Q4 2024 10-K + last 7 days of Tesla news"</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>War Room Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Shark className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">Hedge Fund Analyst</h4>
                    <Badge variant="destructive" className="text-xs">
                      Sell
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Margins dropped 2%, questionable accounting on energy segment. Red flag on inventory buildup. Cash
                    burn accelerating while competition intensifies in China and Europe."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">Sell-Side Analyst</h4>
                    <Badge variant="outline" className="text-xs">
                      Hold
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Mixed signals. Revenue growth solid at 15% YoY, but margin compression concerning. Robotaxi
                    potential remains speculative but promising. Valuation stretched relative to auto peers."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">Retail Investor</h4>
                    <Badge variant="default" className="bg-green-600 text-xs">
                      Buy
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "HODL. Elon said 'we're just getting started.' Robotaxi reveal coming in August could be huge.
                    Reddit sentiment still bullish despite recent dip."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Newspaper className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">News Digest Bot</h4>
                    <Badge variant="outline" className="text-xs">
                      Neutral
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Reuters reported layoffs in charging division, CNBC bullish on robotaxi potential. WSJ highlighted
                    growing inventory concerns. Twitter sentiment down 15% this week."
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-md border bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h4 className="font-semibold">Final Recommendation</h4>
                </div>
                <p className="text-sm">Team vote → 1 Sell, 1 Hold, 1 Buy, 1 Neutral</p>
                <div className="flex items-center gap-2 mt-2">
                  <ThumbsUp className="h-5 w-5 text-amber-500" />
                  <p className="font-medium">Hold with caution</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
