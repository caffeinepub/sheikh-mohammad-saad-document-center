import { FileText, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { getAssetPath } from './lib/assetPaths';
import { LiveUrlFooter } from './components/LiveUrlFooter';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={getAssetPath('assets/generated/shop-board-logo.dim_512x512.png')}
              alt="Sheikh Mohammad Saad Document Center shop board logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-lg hidden sm:inline-block">
              Sheikh Mohammad Saad Document Center
            </span>
            <span className="font-semibold text-lg sm:hidden">SMSDC</span>
          </div>
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors hidden sm:block"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={getAssetPath('assets/generated/shop-board-banner.dim_1600x600.png')}
              alt="Sheikh Mohammad Saad Document Center shop board banner" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-bold tracking-tight">
                Sheikh Mohammad Saad Document Center
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for professional document services in Delhi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-soft"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors border border-border"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive online form assistance for essential government documents
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* PAN Card Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">PAN Card</h3>
                <p className="text-muted-foreground mb-4">
                  Complete assistance with PAN card online form applications, corrections, and updates.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Fast Processing</span>
                </div>
              </div>

              {/* Aadhaar Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Aadhaar Card</h3>
                <p className="text-muted-foreground mb-4">
                  Expert help with Aadhaar enrollment, updates, and online form submissions.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Secure & Reliable</span>
                </div>
              </div>

              {/* Voter ID Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Voter ID</h3>
                <p className="text-muted-foreground mb-4">
                  Professional support for Voter ID registration, corrections, and online applications.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-bold mb-6">About Us</h2>
              <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
                <p className="text-lg text-muted-foreground mb-6">
                  Sheikh Mohammad Saad Document Center is your trusted partner for all document-related services in Delhi. We specialize in providing professional assistance with government document applications and online forms.
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-lg font-medium text-foreground">
                    Owner: Sheikh Mohammad Salman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-bold mb-4">Visit Us</h2>
                <p className="text-lg text-muted-foreground">
                  Find us at our office in Bawana, Delhi
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      C-329, Block C, J.J. Colony, Bawana, Delhi - 110039
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C-329%2C+Block+C%2C+J.J.+Colony%2C+Bawana%2C+Delhi+-+110039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-muted-foreground">
                  Get in touch with us for any queries or assistance
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:9716379837"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    9716379837
                  </a>
                </div>

                {/* Email */}
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:Smsdcenter2024@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    Smsdcenter2024@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={getAssetPath('assets/generated/shop-board-logo.dim_512x512.png')}
                  alt="Sheikh Mohammad Saad Document Center shop board logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="font-semibold text-lg">
                  Sheikh Mohammad Saad Document Center
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional document services in Delhi
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Location
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <a
                  href="tel:9716379837"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  9716379837
                </a>
                <a
                  href="mailto:Smsdcenter2024@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  <Mail className="w-4 h-4" />
                  Smsdcenter2024@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Live URL Display */}
          <div className="mb-8">
            <LiveUrlFooter />
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Sheikh Mohammad Saad Document Center. Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
