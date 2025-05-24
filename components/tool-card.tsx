import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  number: string
  title: string
  description: string
  isActive?: boolean
}

export function ToolCard({ number, title, description, isActive = false }: ToolCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md", isActive ? "border-primary/50 bg-primary/5" : "")}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
            {number}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
