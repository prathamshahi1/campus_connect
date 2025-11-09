
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, MessageSquare, User, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Don't show login/signup buttons if we're already on those pages or if user is logged in
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgot-password";

  return (
    <nav className="bg-white border-b border-border py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-primary rounded-lg p-1.5">
            <BookOpen className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-xl font-bold">CampusConnect</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/notes" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Notes</span>
            </Link>
            <Link to="/forum" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              <span>Forum</span>
            </Link>
            <Link to="/profile" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </div>
          {user ? (
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </Button>
          ) : !isAuthPage && (
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md animate-fade-in border-b border-border">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              to="/notes"
              className="block py-2 px-4 text-sm hover:bg-secondary rounded-md flex items-center gap-2"
              onClick={toggleMenu}
            >
              <BookOpen className="h-4 w-4" />
              <span>Notes</span>
            </Link>
            <Link
              to="/forum"
              className="block py-2 px-4 text-sm hover:bg-secondary rounded-md flex items-center gap-2"
              onClick={toggleMenu}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Forum</span>
            </Link>
            <Link
              to="/profile"
              className="block py-2 px-4 text-sm hover:bg-secondary rounded-md flex items-center gap-2"
              onClick={toggleMenu}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            {user ? (
              <Button variant="outline" size="sm" onClick={() => { signOut(); toggleMenu(); }} className="w-full justify-start">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Sign out</span>
              </Button>
            ) : !isAuthPage && (
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" asChild className="justify-start" onClick={toggleMenu}>
                  <Link to="/login" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    <span>Log in</span>
                  </Link>
                </Button>
                <Button size="sm" asChild onClick={toggleMenu}>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
