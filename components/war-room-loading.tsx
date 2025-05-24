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
  LoaderCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function WarRoomLoading() {
  const stocks = ["AAPL", "NVDA", "TSLA", "NFLX", "GOOGL"];
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3 relative" />
        <CardContent>
          <div className="flex gap-4 w-full items-center justify-center min-h-56">
            <p className="md:text-4xl text-2xl font-semibold leading-none tracking-tight z-30">
              Loading
            </p>
            <LoaderCircle className="animate-spin h-72 w-72 text-gray-600/20 absolute z-10" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
