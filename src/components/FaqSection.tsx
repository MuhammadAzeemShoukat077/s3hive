import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does vStrive work?",
      answer: "vStrive connects to your AWS account using secure IAM roles and provides a unified dashboard to manage S3 bucket access policies. You can set up custom policies, monitor access patterns, and ensure compliance across all your S3 resources."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, absolutely. We use industry-standard security practices including encryption in transit and at rest, minimal IAM permissions, and we never store your actual S3 data - only metadata and access patterns."
    },
    {
      question: "What about compliance?",
      answer: "vStrive helps you maintain compliance with standards like SOC 2, GDPR, and HIPAA by providing comprehensive audit trails, automated compliance reporting, and policy templates that meet regulatory requirements."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes, vStrive offers integrations with popular tools like Slack, Microsoft Teams, PagerDuty, and other monitoring solutions. We also provide REST APIs for custom integrations."
    },
    {
      question: "What happens during the free trial?",
      answer: "During your 30-day free trial, you get full access to all features. No credit card required. You can connect your AWS account, scan your S3 buckets, and experience the full platform before making any commitment."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about vStrive and S3 access management.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;