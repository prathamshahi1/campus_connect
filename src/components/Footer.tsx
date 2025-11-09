import { Link } from "react-router-dom";
import { BookOpen, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary rounded-lg p-1.5">
                <BookOpen className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold">CampusConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting students, sharing knowledge, and building careers together.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-base mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/notes" className="text-muted-foreground hover:text-primary text-sm">
                  Notes & Resources
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-primary text-sm">
                  Q&A Forum
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary text-sm">
                  User Profiles
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-base mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@campusconnect.example" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 CampusConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
