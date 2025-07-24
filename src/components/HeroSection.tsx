import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-light to-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Simplify Your S3 
                <span className="text-brand block">Access Control</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                All-in-one AWS IAM Compliance Manager and Control unified policies, 
                simplify data access, and Improve security, all in one dashboard.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand hover:bg-brand-dark text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <span>✓ 30 days challenge</span>
              <span>✓ All-in-one dashboard</span>
              <span>✓ No Coding Required</span>
            </div>
          </div>

          {/* Right Content - Progress Steps */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-3/4 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>

                {/* Step Items */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Connect AWS Account</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Scan S3 Buckets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Review Policies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-2 border-brand rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Deploy Changes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;