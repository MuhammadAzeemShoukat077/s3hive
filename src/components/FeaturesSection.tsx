import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BarChart3, Zap, Lock, Globe } from "lucide-react";
import roleAccessIcon from "@/assets/role-access-icon.png";
import folderPermissionsIcon from "@/assets/folder-permissions-icon.png";
import awsSecurityIcon from "@/assets/aws-security-icon.png";
import s3BrowserIcon from "@/assets/s3-browser-icon.png";
import auditComplianceIcon from "@/assets/audit-compliance-icon.png";
import quickSetupIcon from "@/assets/quick-setup-icon.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      image: roleAccessIcon,
      title: "Role-Based Access Control",
      description: "Create custom roles and assign permissions with precision. No more complex IAM policy juggling."
    },
    {
      icon: Users,
      image: folderPermissionsIcon,
      title: "Granular Folder Permissions",
      description: "Set read, write, and delete permissions at any folder or file level within your S3 buckets."
    },
    {
      icon: BarChart3,
      image: awsSecurityIcon,
      title: "Secure AWS Integration",
      description: "Connect securely to your AWS account with minimal permissions. Your data stays in your control."
    },
    {
      icon: Zap,
      image: s3BrowserIcon,
      title: "Intuitive S3 Browser",
      description: "Navigate your S3 buckets like a file system. No more wrestling with the AWS console."
    },
    {
      icon: Lock,
      image: auditComplianceIcon,
      title: "Audit & Compliance",
      description: "Track all access changes with detailed logs. Meet compliance requirements effortlessly."
    },
    {
      icon: Globe,
      image: quickSetupIcon,
      title: "Quick Setup",
      description: "Get started in minutes, not hours. Connect your AWS account and start managing access immediately."
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
            return (
              <Card key={index} className="feature-card border border-border group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-brand transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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