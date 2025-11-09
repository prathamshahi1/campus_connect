
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Connect, Collaborate, and Thrive Together
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
            Share knowledge, get answers to your questions, and build a network for your academic and professional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/signup">Join CampusConnect</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
