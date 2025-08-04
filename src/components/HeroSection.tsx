import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Folder, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-light to-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-light text-brand border border-brand/20">
                <Shield className="w-4 h-4 mr-2" />
                Secure S3 Access Management
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Simplify Your <span className="text-brand">S3</span><br />
                Access Control
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Manage AWS S3 bucket permissions through an intuitive interface. 
                Create roles, assign granular permissions, and control access 
                without wrestling with IAM policies.
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
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Folder className="w-4 h-4 text-brand" />
                <span>30 Days Challenge</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-brand" />
                <span>All in One Dashboard</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-brand" />
                <span>No Coding Required</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-2">Trusted by DevOps teams at:</p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>TechCorp</span>
                <span>DataFlow</span>
                <span>CloudOps</span>
                <span>SecureStack</span>
              </div>
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