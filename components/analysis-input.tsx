"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUp, Link2, Search, TrendingUp } from "lucide-react";

interface AnalysisInputProps {
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  setStockName: (stockName: string) => void;
  isAnalyzing: boolean;
  handleAnalyze: () => void;
  stockName: string;
  agents: string[];
  setAgents: (agents: string[]) => void;
}

export function AnalysisInput({
  setIsAnalyzing,
  setStockName,
  isAnalyzing,
  handleAnalyze,
  stockName,
  agents,
  setAgents,
}: AnalysisInputProps) {
  const agentlist = [
    "Hedge Fund Analyst",
    "News Analyst",
    "Retail Analyst",
    "Sellside Analyst",
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Analysis</CardTitle>
        <CardDescription>
          Input financial data for the AI agents to analyze
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ticker">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="ticker">Ticker</TabsTrigger>
            {/* <TabsTrigger value="upload">Upload</TabsTrigger> */}
            {/* <TabsTrigger value="url">URL</TabsTrigger> */}
          </TabsList>

          <TabsContent value="ticker" className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter ticker symbol (e.g., TSLA)"
                name="stock-name"
                onChange={(e) => setStockName(e.target.value)}
                value={stockName}
              />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Include:</div>
              <div className="flex flex-wrap gap-2">
                {agentlist.map((agent, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`text-sm ${
                      agents.includes(agent)
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : ""
                    }`}
                    onClick={(e) => {
                      if (agents.includes(agent)) {
                        setAgents(agents.filter((ele) => ele !== agent));
                      } else {
                        setAgents([...agents, agent]);
                      }
                    }}
                  >
                    {agent}
                  </Button>
                ))}
              </div>
            </div>
            <Button
              className="w-full"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent>

          {/* <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop files or click to browse
              </p>
              <Button variant="outline" size="sm">
                Browse Files
              </Button>
            </div>

            <Button
              className="w-full"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent> */}

          {/* <TabsContent value="url" className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter URL to financial report or news article" />
              <Button variant="outline" size="icon">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
            <Textarea placeholder="Add notes or specific questions for the analysis (optional)" />
            <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent> */}
        </Tabs>
      </CardContent>
    </Card>
  );
}
