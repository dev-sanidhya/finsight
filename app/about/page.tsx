import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart2, Users, Brain, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="relative bg-primary/5 border-b">
        <div className="container py-16">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-6 w-6 text-primary" />
            <h4 className="text-primary font-medium">Our Mission</h4>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            About FinSight
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Where AI meets the sharpest minds in finance.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">
                  FinSight: The Financial LLM War Room
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-1">
                  Democratizing sophisticated financial thinking
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-base">
                <p>
                  <strong>FinSight</strong> is a next-gen financial platform
                  that brings the strategic debates of elite hedge funds to
                  everyone. Powered by multi-agent large language models (LLMs),
                  it simulates how analysts, strategists, and investors think
                  and challenge each other.
                </p>

                <p>
                  Our mission:{" "}
                  <em>to democratize high-level financial decision-making</em>.
                  Whether you're a retail investor, finance student, or seasoned
                  pro, FinSight gives you an interactive space where AI agents
                  dissect news, earnings, and data—then debate and vote on
                  strategies like “Buy,” “Hold,” or “Sell.”
                </p>

                <p>
                  Each agent offers a distinct perspective—from aggressive hedge
                  fund views to simplified retail logic. They challenge biases,
                  expose blind spots, and push toward smarter outcomes.
                </p>

                <p>
                  FinSight isn't just analysis—it's a war room. Strategies
                  clash, ideas sharpen, and clear decisions emerge. It blends
                  financial logic with AI intelligence, all in a sleek,
                  intuitive interface.
                </p>

                <p>
                  Our vision is to equip every investor with tools once reserved
                  for billion-dollar funds—now accessible, transparent, and
                  built for trust.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Our Technology</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                FinSight leverages cutting-edge multi-agent LLM systems,
                combining the power of GPT-4, Claude, and Mixtral models to
                create a sophisticated financial analysis platform that
                simulates expert debate.
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We're a team of financial experts, AI researchers, and software
                engineers passionate about democratizing access to sophisticated
                financial analysis tools previously available only to elite
                institutions.
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We envision a future where every investor, regardless of their
                background or resources, has access to the same quality of
                financial insights as Wall Street professionals.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
