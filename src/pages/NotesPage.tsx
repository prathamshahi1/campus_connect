
import { useState } from "react";
import Layout from "@/components/Layout";
import NoteCard from "@/components/NoteCard";
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
  Upload,
  Search,
  BookOpen,
  Filter,
  ArrowUpDown
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  {
    id: "4",
    title: "Organic Chemistry Lab Report Template",
    subject: "Chemistry",
    college: "Harvard University",
    uploadedBy: "Sarah Williams",
    rating: 4.6,
    downloads: 1750,
    views: 4100,
    fileType: "docx" as const,
    dateUploaded: "Mar 10, 2025",
  },
  {
    id: "5",
    title: "Economics: Macroeconomic Principles and Policies",
    subject: "Economics",
    college: "Princeton University",
    uploadedBy: "James Thompson",
    rating: 4.8,
    downloads: 1320,
    views: 3250,
    fileType: "pdf" as const,
    dateUploaded: "Apr 1, 2025",
  },
  {
    id: "6",
    title: "Introduction to Psychology: Comprehensive Notes",
    subject: "Psychology",
    college: "Yale University",
    uploadedBy: "Melissa Brown",
    rating: 4.7,
    downloads: 1890,
    views: 4600,
    fileType: "pdf" as const,
    dateUploaded: "Mar 25, 2025",
  },
];

const subjects = [
  "All Subjects",
  "Computer Science",
  "Mathematics",
  "Chemistry",
  "Economics",
  "Psychology",
];

const fileTypes = ["All Types", "PDF", "DOCX", "PPT"];

const sortOptions = [
  "Most Recent",
  "Highest Rated",
  "Most Downloaded",
  "Most Viewed",
];

const NotesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedFileType, setSelectedFileType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Most Recent");

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Notes & Resources</h1>
              <p className="text-muted-foreground">
                Discover and share study materials from students across institutions
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 md:mt-0" size="lg">
                  <Upload className="mr-2 h-4 w-4" /> Upload Note
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Upload New Note</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter note title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.slice(1).map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="college">College/University</Label>
                    <Input id="college" placeholder="Enter your institution" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Add a brief description of your note" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="file">File</Label>
                    <Input id="file" type="file" />
                  </div>
                  <Button type="submit" className="w-full">
                    Upload
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
                  placeholder="Search notes by title, subject, or college..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-48">
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-40">
                  <Select value={selectedFileType} onValueChange={setSelectedFileType}>
                    <SelectTrigger>
                      <BookOpen className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fileTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
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
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleNotes.map((note) => (
              <NoteCard key={note.id} {...note} />
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

export default NotesPage;
