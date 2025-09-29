import { Construction } from "lucide-react";

export default function AssessmentBuilder() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-muted/50 rounded-full flex items-center justify-center">
          <Construction className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-display font-bold">Assessment Builder</h2>
        <p className="text-muted-foreground max-w-md">
          The assessment builder feature is coming soon. You'll be able to create custom assessments 
          with various question types and conditional logic.
        </p>
      </div>
    </div>
  );
}