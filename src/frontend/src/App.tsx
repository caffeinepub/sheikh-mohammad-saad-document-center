import { FileText, MapPin, Phone, Mail, CheckCircle, Baby, Heart, Briefcase, HardHat, Plane } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          {/* Left: Brand Icon + Full Name */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src={getAssetPath('assets/generated/doc-icon-dark-blue-check.dim_256x256.png')}
              alt="Document Center Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="font-semibold text-base whitespace-nowrap hidden sm:inline">
              Sheikh Mohammad Saad Document Center
            </span>
            <span className="font-semibold text-sm whitespace-nowrap sm:hidden">
              Sheikh Mohammad Saad Document Center
            </span>
          </div>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2 ml-auto">
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
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors hidden sm:block"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors hidden lg:block"
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
              <div className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                Sheikh Mohammad Saad Document Center mein aapka swagat hai! 📄✨
                {'\n'}
                Hum Bawana mein aapki sabhi online aur sarkari document sambandhi zarurato ko poora karne ke liye pratibaddh hain. Chahe wo naya Aadhaar update ho, PAN card, ya Ayushman card—hum har kaam poori zimmedari aur tezi se karte hain.
                {'\n'}
                Hamara maksad hai aapka samay bachana aur aapko behtar sevayein dena. Aaj hi hamari services dekhein ya humse sampark karein!
              </div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

              {/* Birth Certificate Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Baby className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Birth Certificate</h3>
                <p className="text-muted-foreground mb-4">
                  Assistance with birth certificate applications, corrections, and online form submissions.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Quick Service</span>
                </div>
              </div>

              {/* Ayushman Card Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ayushman Card</h3>
                <p className="text-muted-foreground mb-4">
                  Complete support for Ayushman Bharat health card registration and online applications.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Health Coverage</span>
                </div>
              </div>

              {/* E-Shram Card Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-Shram Card</h3>
                <p className="text-muted-foreground mb-4">
                  Expert assistance with E-Shram card registration for unorganized workers.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Worker Benefits</span>
                </div>
              </div>

              {/* Labour Card Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Labour Card</h3>
                <p className="text-muted-foreground mb-4">
                  Professional help with labour card registration and online form applications.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Labour Welfare</span>
                </div>
              </div>

              {/* Rail Ticket & Flight Ticket Booking Service */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rail Ticket & Flight Ticket Booking</h3>
                <p className="text-muted-foreground mb-4">
                  Convenient rail and flight ticket booking services for your travel needs.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Travel Made Easy</span>
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
                  href="https://maps.google.com/?q=Sheikh+Mohammad+Saad+Document+Center+Bawana"
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
                  src={getAssetPath('assets/generated/doc-icon-dark-blue-check.dim_256x256.png')}
                  alt="Document Center Logo" 
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="tel:9716379837" className="hover:text-foreground transition-colors">
                  📞 9716379837
                </a>
                <a href="mailto:Smsdcenter2024@gmail.com" className="hover:text-foreground transition-colors break-all">
                  ✉️ Smsdcenter2024@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Sheikh Mohammad Saad Document Center. All rights reserved.</p>
              <p>
                Built with ❤️ using{' '}
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

          {/* Live URL Footer */}
          <div className="mt-8">
            <LiveUrlFooter />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
