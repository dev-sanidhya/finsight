import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  BarChart2,
  TrendingUp,
  Newspaper,
  LineChart,
  UserCog,
  Lightbulb,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Multi-Agent Financial AI",
      description: "Simulated debates between expert AI personas.",
      content:
        "FinSight uses cutting-edge AI to simulate hedge fund analysts, retail investors, and strategists. Agents debate and derive strategic insights from your inputs.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Debate-to-Decision Workflow",
      description: "Watch AIs argue and align—then decide.",
      content:
        "Instead of instant suggestions, FinSight walks you through the debate journey. Each agent defends a viewpoint before voting on Buy, Hold, or Sell.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
    },
    {
      title: "News & Report Analysis",
      description: "Decode headlines with intelligent commentary.",
      content:
        "Upload financial news, earnings transcripts, or even your portfolio. FinSight transforms raw text into contextual insights with multiple perspectives.",
      icon: <Newspaper className="h-6 w-6 text-primary" />,
    },
    {
      title: "Interactive Visuals",
      description: "Financial intelligence, made visual.",
      content:
        "See the AI discussions come to life through rich visualizations—agent reactions, vote breakdowns, and narrative charts for intuitive analysis.",
      icon: <LineChart className="h-6 w-6 text-primary" />,
    },
    {
      title: "Personalized Insights",
      description: "Financial feedback that evolves with you.",
      content:
        "Whether you're a retail trader or portfolio manager, FinSight tailors its output to match your style—simplifying the complex or adding deeper layers.",
      icon: <UserCog className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-Time Evolution",
      description: "Your virtual analyst gets smarter over time.",
      content:
        "Every interaction trains FinSight. With each debate, news article, and query, our multi-agent system adapts to market patterns and your preferences.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="relative bg-primary/5 border-b">
        <div className="container py-16">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-6 w-6 text-primary" />
            <h4 className="text-primary font-medium">Platform Capabilities</h4>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            FinSight Features
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Discover how our multi-agent LLM system transforms financial
            analysis
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {feature.content}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="border-primary/20 bg-primary/5">
            <div className="grid md:grid-cols-2 gap-6">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-primary font-medium">
                    Premium Features
                  </span>
                </div>
                <CardTitle className="text-2xl mb-2">
                  Ready to upgrade your financial analysis?
                </CardTitle>
                <CardDescription className="text-base">
                  FinSight Pro unlocks advanced features including custom agent
                  training, API access, and unlimited analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <div className="w-full max-w-xs p-6 rounded-lg border border-primary/20 bg-card text-center">
                  <div className="text-2xl font-bold mb-2">FinSight Pro</div>
                  <div className="text-4xl font-bold mb-4">
                    $19.99
                    <span className="text-lg font-normal text-muted-foreground">
                      /mo
                    </span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Unlimited financial analyses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Custom agent training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>API access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md font-medium">
                    Upgrade Now
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
