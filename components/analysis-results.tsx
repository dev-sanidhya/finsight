import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, TrendingDown, TrendingUp, FileText, BarChart } from "lucide-react"

export function AnalysisResults() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">AAPL Q3 2024 Earnings Report</h3>
          <p className="text-sm text-muted-foreground">Analyzed on April 15, 2025</p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary">
          Technology
        </Badge>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center">
            <FileText className="mr-2 h-4 w-4 text-primary" />
            TL;DR in Simple English
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            Apple had a strong quarter with revenue up 8% year-over-year, driven by iPhone and Services growth. However,
            iPad sales declined by 5%. The company announced a $90B stock buyback program and increased its dividend by
            5%. Management expects continued growth in the next quarter but warned about potential supply chain
            challenges.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center">
            <AlertCircle className="mr-2 h-4 w-4 text-primary" />
            Key Risk Factors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <TrendingDown className="mr-2 h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>Ongoing supply chain constraints may impact product availability</span>
            </li>
            <li className="flex items-start">
              <TrendingDown className="mr-2 h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>Increased competition in the smartphone market affecting margins</span>
            </li>
            <li className="flex items-start">
              <TrendingDown className="mr-2 h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>Regulatory challenges in key markets like China and EU</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center">
            <BarChart className="mr-2 h-4 w-4 text-primary" />
            Summary for Retail Investors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <TrendingUp className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Strong cash position with $73B in cash and equivalents</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Services revenue grew 17%, showing strength in recurring revenue</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>Increased dividend signals management confidence in future cash flows</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Sentiment Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Overall Sentiment</span>
                <span className="text-sm font-medium">Positive</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[72%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">News Coverage</span>
                <span className="text-sm font-medium">Neutral</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[55%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Analyst Ratings</span>
                <span className="text-sm font-medium">Bullish</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[85%]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
