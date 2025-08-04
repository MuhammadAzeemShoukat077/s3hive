import { Button } from "@/components/ui/button";

const Footer = () => {
  const productLinks = [
    "Features",
    "Integrations", 
    "Pricing",
    "API"
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Contact",
    "Blog"
  ];

  const resourceLinks = [
    "Documentation",
    "Tutorials",
    "Support",
    "Status Page"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Security",
    "Compliance"
  ];

  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand font-bold text-sm">vS</span>
              </div>
              <span className="text-xl font-bold">vStrive</span>
            </div>
            <p className="text-gray-300 text-sm">
              Simplify your AWS S3 access management with comprehensive policies, monitoring, and compliance in one platform.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">🏆 AWS Partner</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest updates on S3 security best practices and new features.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-white text-brand placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white min-w-0"
              />
              <Button variant="secondary" className="bg-white text-brand hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 vStrive. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-sm">🌐 Global</span>
              <span className="text-gray-300 text-sm">🔒 SOC 2 Compliant</span>
              <span className="text-gray-300 text-sm">⚡ 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;