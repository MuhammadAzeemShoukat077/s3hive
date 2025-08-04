import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$39",
      period: "per month",
      description: "Perfect for small teams getting started with S3 access management.",
      features: [
        "Up to 10 S3 buckets",
        "Basic access policies",
        "Email notifications",
        "Audit logs (30 days)",
        "Standard support"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Advanced features for growing teams with complex S3 infrastructure.",
      features: [
        "Unlimited S3 buckets",
        "Advanced policy management",
        "Real-time notifications",
        "Audit logs (1 year)",
        "Custom integrations",
        "Priority support",
        "Compliance reporting",
        "Multi-region support"
      ],
      buttonText: "Start Free Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-brand-light via-background to-brand-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--brand))_0%,transparent_50%)] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand/10 text-brand border border-brand/20 mb-6">
            🚀 Special Launch Pricing - Limited Time
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our flexible plans designed to scale with your S3 access management needs. 
            All plans include a 30-day free trial with full access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transform transition-all duration-300 hover:scale-105 ${
              plan.popular 
                ? 'pricing-card-popular ring-2 ring-brand shadow-2xl shadow-brand/20 border-brand/50' 
                : 'border border-border hover:shadow-xl hover:shadow-brand/10'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="bg-gradient-to-r from-brand to-brand-dark text-white text-sm font-medium px-6 py-2 rounded-full shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center space-y-6 pb-8">
                <h3 className="text-3xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full text-lg py-6 font-semibold transition-all duration-300 ${plan.popular 
                    ? 'bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-background border-2 border-brand text-brand hover:bg-brand hover:text-white hover:shadow-lg hover:scale-105'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                  {plan.popular && <span className="ml-2">🚀</span>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;