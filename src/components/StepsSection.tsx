import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StepsSection = () => {
  const steps = [
    {
      number: "1",
      title: "Connect AWS Account",
      description: "Securely connect your AWS account using IAM roles with minimal permissions required."
    },
    {
      number: "2",
      title: "Scan & Analyze",
      description: "Our system scans your S3 buckets and analyzes current access patterns and policies."
    },
    {
      number: "3",
      title: "Configure Policies",
      description: "Set up custom access policies using our intuitive interface with pre-built templates."
    },
    {
      number: "4",
      title: "Monitor & Maintain",
      description: "Continuously monitor access patterns and maintain compliance with automated reporting."
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
            From AWS connection to full S3 access control setup takes less than 15 minutes using our guided setup process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand rounded-full flex items-center justify-center text-lg font-bold text-white">
                  {step.number}
                </div>
                <div className="space-y-3 pt-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="lg:ml-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 text-lg">S3 Access Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4 bg-gray-50">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">my-app-uploads</span>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Secure</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">user-data-bucket</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Review</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">backup-storage</span>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Secure</span>
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

export default StepsSection;