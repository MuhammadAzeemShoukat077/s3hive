import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">vS</span>
              </div>
              <span className="text-xl font-bold text-foreground">vStrive</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-brand transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-brand transition-colors">Use Case</a>
            <a href="#" className="text-foreground hover:text-brand transition-colors">Pricing</a>
            <a href="#" className="text-foreground hover:text-brand transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-foreground">Try It</span>
            <Button className="bg-brand hover:bg-brand-dark text-white">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-brand">Products</a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-brand">Use Case</a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-brand">Pricing</a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-brand">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-brand hover:bg-brand-dark text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;