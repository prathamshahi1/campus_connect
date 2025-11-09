
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NoteCard from "@/components/NoteCard";
import QueryCard from "@/components/QueryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for notes
const sampleNotes = [
  {
    id: "1",
    title: "Data Structures and Algorithms Complete Notes",
    subject: "Computer Science",
    college: "MIT",
    uploadedBy: "Alex Chen",
    rating: 4.7,
    downloads: 1240,
    views: 3800,
    fileType: "pdf" as const,
    dateUploaded: "Mar 15, 2025",
  },
  {
    id: "2",
    title: "Advanced Calculus Study Guide with Practice Problems",
    subject: "Mathematics",
    college: "Stanford University",
    uploadedBy: "Priya Singh",
    rating: 4.9,
    downloads: 2150,
    views: 5300,
    fileType: "pdf" as const,
    dateUploaded: "Apr 2, 2025",
  },
  {
    id: "3",
    title: "Introduction to Machine Learning Presentation",
    subject: "Computer Science",
    college: "Berkeley",
    uploadedBy: "Marcus Johnson",
    rating: 4.5,
    downloads: 980,
    views: 2400,
    fileType: "ppt" as const,
    dateUploaded: "Mar 28, 2025",
  },
];

// Sample data for forum queries
const sampleQueries = [
  {
    id: "1",
    title: "How to implement a balanced binary search tree?",
    description: "I'm struggling with implementing a self-balancing binary search tree. Specifically, I'm confused about the rotation operations during insertion and deletion. Can someone explain the algorithm or share resources?",
    tags: ["data structures", "algorithms", "binary trees"],
    askedBy: "Raj Patel",
    answers: 7,
    votes: 15,
    timeAgo: "2 days ago",
    resolved: true,
  },
  {
    id: "2",
    title: "Recommended resources for learning React.js for beginners",
    description: "I want to start learning React.js for web development. What resources, courses, or books would you recommend for absolute beginners coming from a basic JavaScript background?",
    tags: ["react", "javascript", "web development"],
    askedBy: "Emma Watson",
    answers: 12,
    votes: 24,
    timeAgo: "1 day ago",
    resolved: false,
  },
  {
    id: "3",
    title: "Tips for technical interviews at Google",
    description: "I have an upcoming technical interview at Google. I'm comfortable with DSA but want to know what specific areas I should focus on and how to prepare effectively in the next two weeks.",
    tags: ["interview prep", "Google", "career advice"],
    askedBy: "David Kim",
    answers: 9,
    votes: 31,
    timeAgo: "4 hours ago",
    resolved: false,
  },
];

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Popular Content
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most valuable resources and discussions on our platform.
            </p>
          </div>

          <Tabs defaultValue="notes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="notes">Popular Notes</TabsTrigger>
                <TabsTrigger value="forum">Active Discussions</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="notes">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleNotes.map((note) => (
                  <NoteCard key={note.id} {...note} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link to="/notes">View All Notes</Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="forum">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleQueries.map((query) => (
                  <QueryCard key={query.id} {...query} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link to="/forum">View All Discussions</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with peers, share knowledge, and accelerate your academic and professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
