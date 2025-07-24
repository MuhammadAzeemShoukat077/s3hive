import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Transform Your S3 Workflow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who have simplified their S3 access management. 
            Start your free trial today and see the difference in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand hover:bg-brand-dark text-white">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;