import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, TrendingDown, TrendingUp, Minus } from "lucide-react"

export function RecentAnalyses() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
            <Minus className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium">Tesla (TSLA)</h4>
            <p className="text-xs text-muted-foreground">Q4 2024 10-K + News</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
            Hold
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium">Apple (AAPL)</h4>
            <p className="text-xs text-muted-foreground">Earnings Report</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Buy
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <TrendingDown className="h-4 w-4 text-red-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium">Netflix (NFLX)</h4>
            <p className="text-xs text-muted-foreground">Subscriber Data</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
            Sell
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <h4 className="text-sm font-medium">My Portfolio</h4>
            <p className="text-xs text-muted-foreground">Tech Stocks</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Rebalance
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
