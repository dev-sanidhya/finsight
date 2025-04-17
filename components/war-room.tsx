import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  ThumbsUp,
  MessageSquare,
  FishIcon as Shark,
  Users,
  Newspaper,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface WarRoomProps {
  analysisData: {
    heading: string;
    ticker: string;
    conclusion: string;
    agents: {
      HedgeFundGPT: {
        rating: "Hold" | "Buy" | "Sell" | "Neutral";
        summary: string;
        raw: string;
      };
      RetailGPT: {
        rating: "Hold" | "Buy" | "Sell" | "Neutral";
        summary: string;
        raw: string;
      };
      NewsBot: {
        rating: "Hold" | "Buy" | "Sell" | "Neutral";
        summary: string;
        raw: string;
      };
      Consensus: {
        rating: "Hold" | "Buy" | "Sell" | "Neutral";
        summary: string;
        raw: string;
      };
    };
    final_recommendation: "Hold" | "Buy" | "Sell" | "Neutral";
    consensus: string;
  };
  query: string;
  setQuery: (query: string) => void;
}

export function WarRoom({ analysisData, query, setQuery }: WarRoomProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Analyzing {analysisData.ticker}</CardTitle>
              <CardDescription>
                {analysisData.ticker} analysis with Recent News
              </CardDescription>
            </div>
            <Badge variant={analysisData.final_recommendation}>
              {analysisData.final_recommendation}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Shark className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Hedge Fund Analyst</h4>
                  <Badge variant={analysisData.agents.HedgeFundGPT.rating}>
                    {analysisData.agents.HedgeFundGPT.rating}
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p className="text-sm text-muted-foreground">
                    {analysisData.agents.HedgeFundGPT.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex items-start gap-3">
              <Avatar className="border-2 border-amber-500/20 h-10 w-10">
                <AvatarFallback className="bg-amber-500/20 text-amber-500">
                  SA
                </AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Sell-Side Analyst</h4>
                  <Badge variant="outline" className="text-xs">
                    {analysisData.agents.}
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>
                    Mixed signals. Revenue growth solid at 15% YoY, but margin
                    compression concerning. Robotaxi potential remains
                    speculative but promising. Valuation stretched relative to
                    auto peers.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>1 min ago</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div> */}

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Retail Investor</h4>
                  <Badge variant={analysisData.agents.RetailGPT.rating}>
                    {analysisData.agents.RetailGPT.rating}
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p className="text-sm text-muted-foreground">
                    {analysisData.agents.RetailGPT.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Newspaper className="h-5 w-5 text-blue-500" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">News Digest Bot</h4>
                  <Badge variant={analysisData.agents.NewsBot.rating}>
                    {analysisData.agents.NewsBot.rating}
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p className="text-sm text-muted-foreground">
                    {analysisData.agents.NewsBot.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-md border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold">Final Recommendation</h4>
              </div>
              <p className="text-sm mb-2 text-gray-300">
                {analysisData.agents.Consensus.summary}
              </p>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-white" />
                <p className="font-medium">
                  {analysisData.final_recommendation}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Textarea
          placeholder="Ask a follow-up question..."
          className="flex-1"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>Send</Button>
      </div>
    </div>
  );
}
