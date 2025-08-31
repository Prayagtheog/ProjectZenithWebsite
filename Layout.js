
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown, Code, Calendar, Users, Heart, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home"), icon: null },
    { 
      name: "Programs", 
      path: createPageUrl("Programs"), 
      icon: Code,
      dropdown: [
        { name: "All Programs", path: createPageUrl("Programs") },
        { name: "Python Programming", path: createPageUrl("Programs") + "?filter=Python" },
        { name: "Java Programming", path: createPageUrl("Programs") + "?filter=Java" },
        { name: "Cybersecurity", path: createPageUrl("Programs") + "?filter=Cybersecurity" },
        { name: "Creative Coding", path: createPageUrl("Programs") + "?filter=Creative" }
      ]
    },
    { name: "Events", path: createPageUrl("Events"), icon: Calendar },
    { name: "About Us", path: createPageUrl("About"), icon: Users },
    { name: "Volunteer", path: createPageUrl("Volunteer"), icon: Heart },
    { name: "Register", path: createPageUrl("Register"), icon: FileText },
    { name: "Contact", path: createPageUrl("Contact"), icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --navy-blue: #0B1A2E;
            --gold: #D4AF37;
            --white: #FFFFFF;
            --light-navy: #1A2B3F;
            --light-gold: #E8C547;
            --gray-50: #FAFAFA;
            --gray-100: #F5F5F5;
            --gray-200: #E5E5E5;
            --gray-600: #757575;
            --gray-800: #424242;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .card-elevation {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1);
            transition: box-shadow 0.2s ease-in-out;
          }
          
          .card-elevation:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 16px 32px rgba(0,0,0,0.12);
          }
          
          .btn-primary {
            background: var(--gold);
            color: var(--navy-blue);
            border: none;
            font-weight: 600;
            transition: all 0.2s ease-in-out;
          }
          
          .btn-primary:hover {
            background: var(--light-gold);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
          }
          
          .btn-secondary {
            background: transparent;
            color: var(--navy-blue);
            border: 2px solid var(--navy-blue);
            font-weight: 600;
            transition: all 0.2s ease-in-out;
          }
          
          .btn-secondary:hover {
            background: var(--navy-blue);
            color: white;
          }
          
          .text-navy { color: var(--navy-blue); }
          .text-gold { color: var(--gold); }
          .bg-navy { background-color: var(--navy-blue); }
          .bg-gold { background-color: var(--gold); }
          .border-navy { border-color: var(--navy-blue); }
          .border-gold { border-color: var(--gold); }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out;
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2fde54240_file_000000004b1461f7aa6a599062fec400.png" 
                alt="Project Zenith" 
                className="h-10 w-10"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-navy">PROJECT ZENITH</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                item.dropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-gold transition-colors duration-200">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link 
                            to={dropdownItem.path}
                            className="w-full px-2 py-1 text-sm hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-gold border-b-2 border-gold"
                        : "text-gray-800 hover:text-gold"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-3 py-2 text-sm font-medium text-gray-800 border-b border-gray-100">
                          {item.name}
                        </div>
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-gold transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? "text-gold bg-gray-50"
                            : "text-gray-800 hover:text-gold hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2fde54240_file_000000004b1461f7aa6a599062fec400.png" 
                  alt="Project Zenith" 
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold">PROJECT ZENITH</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Bridging the digital divide by making advanced technology education accessible to underserved youth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">Email</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to={createPageUrl("Programs")} className="text-gray-300 hover:text-gold transition-colors">Programs</Link></li>
                <li><Link to={createPageUrl("Events")} className="text-gray-300 hover:text-gold transition-colors">Events</Link></li>
                <li><Link to={createPageUrl("Volunteer")} className="text-gray-300 hover:text-gold transition-colors">Volunteer</Link></li>
                <li><Link to={createPageUrl("Register")} className="text-gray-300 hover:text-gold transition-colors">Register</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@projectzenith.org</li>
                <li>Location: Piscataway, NJ</li>
                <li>Partnership Inquiries Welcome</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Project Zenith. All rights reserved. Founded by students, for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


