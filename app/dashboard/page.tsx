"use client";
import { AnalysisInput } from "@/components/analysis-input";
import { WarRoom } from "@/components/war-room";
import { RecentAnalyses } from "@/components/recent-analyses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { set } from "react-hook-form";
import { WarRoomInitial } from "@/components/war-room-initial";
import { WarRoomLoading } from "@/components/war-room-loading";

export default function Dashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stockName, setStockName] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [agents, setAgents] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    console.log(agents);
    const res = await fetch(
      `https://finsight-backend-eb9y.onrender.com/analyze/${stockName}`,
      { method: "GET" }
    );
    const data = await res.json();
    setAnalysisData(data);
    setIsAnalyzing(false);
  };
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Financial War Room</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AnalysisInput
            setIsAnalyzing={setIsAnalyzing}
            setStockName={setStockName}
            isAnalyzing={isAnalyzing}
            handleAnalyze={handleAnalyze}
            stockName={stockName}
            agents={agents}
            setAgents={setAgents}
          />
          {/* <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
              <CardDescription>Your recent financial analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAnalyses />
            </CardContent>
          </Card> */}
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="war-room">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="war-room">War Room</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            <TabsContent value="war-room">
              {!analysisData ? (
                isAnalyzing ? (
                  <WarRoomLoading />
                ) : (
                  <WarRoomInitial setStockName={setStockName} />
                )
              ) : isAnalyzing ? (
                <WarRoomLoading />
              ) : (
                <WarRoom
                  analysisData={analysisData}
                  query={query}
                  setQuery={setQuery}
                />
              )}
            </TabsContent>
            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>
                    Extracted insights from the analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select an analysis to view insights
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            {/* <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Source Data</CardTitle>
                  <CardDescription>
                    Raw data used in the analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select an analysis to view source data
                  </p>
                </CardContent>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
