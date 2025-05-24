"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  Users,
  Newspaper,
} from "lucide-react";

const blogs = [
  {
    title: "How AI is Disrupting Traditional Hedge Fund Strategies",
    description:
      "Explore how FinSight's multi-agent LLMs simulate hedge fund-style debates to evaluate market-moving news and earnings.",
    slug: "ai-disrupting-hedge-funds",
    category: "AI Strategy",
    readTime: "5 min read",
    date: "Apr 12, 2025",
    icon: <TrendingUp className="h-5 w-5" />,
    featured: true,
  },
  {
    title: "War Room Simulations: LLMs vs. Market Volatility",
    description:
      "See how FinSight's War Room handles real-time market scenarios to generate actionable financial insights.",
    slug: "llm-war-room-market-volatility",
    category: "War Room",
    readTime: "7 min read",
    date: "Apr 8, 2025",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "From Sentiment to Strategy: Turning News into Trade Ideas",
    description:
      "Understand how FinSight transforms financial news and reports into structured trade strategies using LLMs.",
    slug: "sentiment-to-strategy-llms",
    category: "Strategy",
    readTime: "4 min read",
    date: "Apr 5, 2025",
    icon: <Newspaper className="h-5 w-5" />,
  },
  {
    title: "Earnings Report Breakdown: How FinSight Extracts Alpha",
    description:
      "Learn how FinSight parses quarterly earnings to uncover signals that inform hedge fund-level decisions.",
    slug: "earnings-report-alpha",
    category: "Analysis",
    readTime: "6 min read",
    date: "Mar 29, 2025",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "FinSight vs Bloomberg Terminal: A New Age of Intelligence",
    description:
      "A head-to-head comparison of FinSight's LLM agents with traditional financial data terminals.",
    slug: "finsight-vs-bloomberg",
    category: "Comparison",
    readTime: "8 min read",
    date: "Mar 22, 2025",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Behind the Scenes: How FinSight's LLM Agents Debate",
    description:
      "Peek into the inner workings of our AI War Room, where agents debate forecasts and challenge each other's models.",
    slug: "llm-agent-debate-system",
    category: "Technology",
    readTime: "5 min read",
    date: "Mar 15, 2025",
    icon: <Users className="h-5 w-5" />,
  },
];

export default function BlogPage() {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="relative bg-primary/5 border-b">
        <div className="container py-16">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-6 w-6 text-primary" />
            <h4 className="text-primary font-medium">FinSight Insights</h4>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            FinSight Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Stay updated with the latest on financial AI, hedge fund-style
            strategy simulations, and how FinSight is revolutionizing
            decision-making with LLMs.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {featuredBlog && (
          <div className="mb-12">
            <h2 className="text-lg font-medium text-muted-foreground mb-6">
              Featured Article
            </h2>
            <Card className="overflow-hidden border-primary/20 bg-primary/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-primary/90">
                        {featuredBlog.category}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {featuredBlog.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      {featuredBlog.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6">
                      {featuredBlog.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {featuredBlog.readTime}
                    </div>
                    <Button variant="default">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center p-8 hidden md:flex">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    {featuredBlog.icon}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <h2 className="text-lg font-medium text-muted-foreground mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularBlogs.map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all duration-300 border-muted flex flex-col h-full"
            >
              <div className="h-2 bg-primary/80" />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {blog.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {blog.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    {blog.icon}
                  </div>
                  <span>{blog.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-between group"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
