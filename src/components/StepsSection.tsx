import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Settings, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const StepsSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "Connect Your AWS Account",
      description: "Securely link your AWS account with minimal permissions. We only store your AWS credentials.",
      features: [
        "OAuth-based authentication",
        "Generated access keys",
        "Rapid-access security initially"
      ]
    },
    {
      icon: Users,
      title: "Create Roles & Users",
      description: "Define custom roles with specific permissions. Assign users to appropriate responsibilities.",
      features: [
        "Custom role definitions",
        "Team member assignment",
        "Role inheritance support"
      ]
    },
    {
      icon: Settings,
      title: "Set Granular Permissions",
      description: "Browse your S3 buckets and set read, write, and delete permissions at any folder or file level.",
      features: [
        "Folder-level control",
        "File-specific permissions",
        "Bulk permission updates"
      ]
    },
    {
      icon: BarChart3,
      title: "Deploy & Monitor",
      description: "Deploy access control policies and monitor usage through our comprehensive dashboard.",
      features: [
        "Real-time monitoring",
        "Access audit logs",
        "Policy compliance checks"
      ]
    }
  ];

  return (
    <section id="steps" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Started in <span className="text-brand">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From AWS connection to full access control deployment in under 10 minutes. 
            No complex setup, no learning curve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="step-card border border-border group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-brand group-hover:text-white" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-brand transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                        <div className="space-y-1">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-brand" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={dashboardMockup} 
                alt="S3 Access Management Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand text-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">Live Dashboard</div>
              <div className="text-xs opacity-90">Real-time S3 monitoring</div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-brand-light to-background rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your S3 Workflow?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of DevOps teams who've simplified their S3 access management 
              with s3hive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-dark text-white">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;