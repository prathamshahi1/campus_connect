
import { useState } from "react";
import Layout from "@/components/Layout";
import QueryCard from "@/components/QueryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search,
  MessageSquare,
  Filter,
  ArrowUpDown,
  PlusCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

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
  {
    id: "4",
    title: "Understanding Big O Notation for algorithm complexity",
    description: "I'm having trouble understanding the concept of Big O notation and how to analyze the time and space complexity of algorithms. Could someone explain it in simple terms with examples?",
    tags: ["algorithms", "complexity theory", "computer science"],
    askedBy: "Lisa Johnson",
    answers: 15,
    votes: 42,
    timeAgo: "3 days ago",
    resolved: true,
  },
  {
    id: "5",
    title: "How to prepare for product management interviews?",
    description: "I'm transitioning from software engineering to product management. What skills should I focus on and how should I prepare for PM interviews at tech companies?",
    tags: ["product management", "career advice", "interviews"],
    askedBy: "Michael Chen",
    answers: 6,
    votes: 18,
    timeAgo: "1 day ago",
    resolved: false,
  },
  {
    id: "6",
    title: "Resources for learning TensorFlow for deep learning",
    description: "I'm looking for beginner-friendly resources to learn TensorFlow for deep learning projects. Particularly interested in computer vision applications. Any recommendations?",
    tags: ["deep learning", "tensorflow", "machine learning"],
    askedBy: "Sophia Rodriguez",
    answers: 4,
    votes: 11,
    timeAgo: "5 hours ago",
    resolved: false,
  },
];

const categories = [
  "All Categories",
  "Programming",
  "Data Science",
  "Career Advice",
  "Academics",
  "Mathematics",
];

const sortOptions = [
  "Most Recent",
  "Most Votes",
  "Most Answers",
];

const ForumPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [showResolvedOnly, setShowResolvedOnly] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagInput.trim() && !selectedTags.includes(tagInput.trim())) {
      setSelectedTags([...selectedTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Q&A Forum</h1>
              <p className="text-muted-foreground">
                Ask questions, share knowledge, and get help from the community
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 md:mt-0" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" /> Ask Question
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Ask a New Question</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Question Title</Label>
                    <Input id="title" placeholder="Enter your question title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Details</Label>
                    <Textarea id="description" placeholder="Provide details about your question" className="min-h-[120px]" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.slice(1).map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="tags" 
                        placeholder="Add tags" 
                        value={tagInput} 
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" variant="outline" onClick={handleAddTag}>
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedTags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-2 py-1">
                          {tag} 
                          <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-muted-foreground hover:text-foreground">
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Post Question
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-border mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions by keyword..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-48">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-48">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 w-full md:w-auto">
                  <Switch
                    id="resolved-only"
                    checked={showResolvedOnly}
                    onCheckedChange={setShowResolvedOnly}
                  />
                  <Label htmlFor="resolved-only">Resolved only</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleQueries.map((query) => (
              <QueryCard key={query.id} {...query} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForumPage;
