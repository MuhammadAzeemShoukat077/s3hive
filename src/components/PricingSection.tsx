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
    <section id="pricing" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our flexible plans designed to scale with your S3 access management needs. 
            All plans include a 30-day free trial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-brand shadow-xl' : 'border border-border'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
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
                  className={`w-full ${plan.popular 
                    ? 'bg-brand hover:bg-brand-dark text-white' 
                    : 'bg-background border border-brand text-brand hover:bg-brand hover:text-white'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
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