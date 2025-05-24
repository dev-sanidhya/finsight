import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function SubscriptionPage() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic financial analysis",
      features: [
        "2 AI agents in debates",
        "Upload up to 3 reports per month",
        "Basic financial metrics",
        "24-hour history retention",
      ],
      limitations: [
        "Limited agent personalities",
        "No custom prompts",
        "No advanced metrics",
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "per month",
      description: "Advanced analysis for serious investors",
      features: [
        "4 AI agents in debates",
        "Upload up to 20 reports per month",
        "Advanced financial metrics",
        "30-day history retention",
        "Custom agent prompts",
        "Priority processing",
      ],
      limitations: ["No API access"],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "per month",
      description: "Full-featured solution for professionals",
      features: [
        "Unlimited AI agents",
        "Unlimited report uploads",
        "Custom agent personalities",
        "Advanced financial metrics",
        "Unlimited history retention",
        "API access",
        "Dedicated support",
        "Team collaboration",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
  ];

  return (
    <div className="container mx-auto pt-24 pb-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-400">
          Unlock the full potential of AI-powered financial analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`border ${
              tier.highlighted
                ? "border-blue-500 bg-blue-950/20"
                : "border-gray-800 bg-gray-900/50"
            } relative flex flex-col`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                )}
              </div>
              <CardDescription className="mt-2">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-3">
                    What&apos;s included:
                  </h3>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.limitations.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-3">
                      Limitations:
                    </h3>
                    <ul className="space-y-3">
                      {tier.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant={tier.buttonVariant}
                className={`w-full ${
                  tier.highlighted ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium mb-2">
              How do AI agents analyze reports?
            </h3>
            <p className="text-gray-400">
              Our AI agents use natural language processing to extract key
              financial metrics and sentiment from quarterly reports, then
              debate the implications based on different investment
              philosophies.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium mb-2">
              Can I cancel my subscription?
            </h3>
            <p className="text-gray-400">
              Yes, you can cancel your subscription at any time. Your benefits
              will continue until the end of your billing period.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium mb-2">
              What file formats are supported?
            </h3>
            <p className="text-gray-400">
              We support PDF, DOCX, and TXT files. For best results, upload the
              official 10-Q or 10-K reports directly from SEC EDGAR.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium mb-2">
              Is my financial data secure?
            </h3>
            <p className="text-gray-400">
              Yes, we use enterprise-grade encryption and do not store the
              contents of your uploaded reports beyond the analysis period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
