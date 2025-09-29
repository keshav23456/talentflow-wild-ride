import { BarChart3 } from "lucide-react";

export default function Analytics() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-muted/50 rounded-full flex items-center justify-center">
          <BarChart3 className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-display font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground max-w-md">
          Analytics and reporting features are coming soon. Track hiring metrics, 
          conversion rates, and team performance.
        </p>
      </div>
    </div>
  );
}