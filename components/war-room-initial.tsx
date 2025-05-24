import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { set } from "react-hook-form";

interface WarRoomInitialProps {
  setStockName: (stockName: string) => void;
}

export function WarRoomInitial({ setStockName }: WarRoomInitialProps) {
  const stocks = ["AAPL", "NVDA", "TSLA", "NFLX", "GOOGL", "AMZN"];
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3 relative" />
        <CardContent>
          <div className="flex flex-col gap-12 w-full items-center justify-center min-h-56">
            <p className="md:text-4xl text-2xl font-semibold leading-none tracking-tight">
              Enter Ticker symbol for a stock
            </p>
            <div className="flex md:gap-3 gap-1">
              {stocks.map((ele, ind) => (
                <Badge
                  key={ind}
                  variant={"outline"}
                  className="md:text-2xl text-xs md:px-4 px-1 text-gray-400/50 border-2 border-gray-400/50 cursor-pointer "
                  onClick={() => {
                    setStockName(ele);
                  }}
                >
                  {ele}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <div className="flex gap-2">
        <Textarea
          placeholder="Ask a follow-up question..."
          className="flex-1"
        />
        <Button>Send</Button>
      </div> */}
    </div>
  );
}
