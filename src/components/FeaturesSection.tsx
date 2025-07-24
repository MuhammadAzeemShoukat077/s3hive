import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BarChart3, Zap, Lock, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Centralized Access Control",
      description: "Manage access through a unified AWS IAM Management across multiple S3 buckets with custom policies."
    },
    {
      icon: Users,
      title: "Real-time Notifications",
      description: "Get instant alerts for any unauthorized access attempts or policy violations across your infrastructure."
    },
    {
      icon: BarChart3,
      title: "Audit & Compliance",
      description: "Comprehensive audit trails and compliance reporting to meet industry standards and regulations."
    },
    {
      icon: Zap,
      title: "Quick Deployment",
      description: "Deploy and configure your S3 access controls in minutes, not hours or days."
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Multi-factor authentication, encryption, and advanced security features to protect your data."
    },
    {
      icon: Globe,
      title: "Global Scaling",
      description: "Scale your access management across multiple regions and thousands of S3 buckets seamlessly."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            All-in-One S3 Access Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Streamline your AWS S3 bucket management with comprehensive access control, 
            monitoring, and compliance tools in a single platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;