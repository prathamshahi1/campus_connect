
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NoteCard from "@/components/NoteCard";
import QueryCard from "@/components/QueryCard";
import { Edit, BookOpen, MessageSquare, Award, Settings } from "lucide-react";

// Sample user data
const user = {
  name: "Alex Chen",
  username: "alexchen",
  avatar: "/placeholder.svg",
  role: "Student",
  college: "Massachusetts Institute of Technology",
  field: "Computer Science",
  year: "Senior",
  joined: "January 2025",
  bio: "Computer Science student passionate about algorithms, machine learning, and software development. I love sharing knowledge and helping others learn.",
  stats: {
    notes: 12,
    queries: 24,
    answers: 35,
    contributions: 47,
  },
  badges: [
    { name: "Top Contributor", color: "bg-purple-100 text-purple-700" },
    { name: "Knowledge Sharer", color: "bg-blue-100 text-blue-700" },
    { name: "Problem Solver", color: "bg-green-100 text-green-700" },
  ],
};

// Sample notes by the user
const userNotes = [
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
    title: "Introduction to Machine Learning Presentation",
    subject: "Computer Science",
    college: "MIT",
    uploadedBy: "Alex Chen",
    rating: 4.5,
    downloads: 980,
    views: 2400,
    fileType: "ppt" as const,
    dateUploaded: "Mar 28, 2025",
  },
  {
    id: "3",
    title: "Neural Networks Implementation Guide",
    subject: "Computer Science",
    college: "MIT",
    uploadedBy: "Alex Chen",
    rating: 4.8,
    downloads: 1520,
    views: 3200,
    fileType: "pdf" as const,
    dateUploaded: "Apr 1, 2025",
  },
];

// Sample queries by the user
const userQueries = [
  {
    id: "1",
    title: "How to implement a balanced binary search tree?",
    description: "I'm struggling with implementing a self-balancing binary search tree. Specifically, I'm confused about the rotation operations during insertion and deletion. Can someone explain the algorithm or share resources?",
    tags: ["data structures", "algorithms", "binary trees"],
    askedBy: "Alex Chen",
    answers: 7,
    votes: 15,
    timeAgo: "2 days ago",
    resolved: true,
  },
  {
    id: "2",
    title: "Tips for technical interviews at Google",
    description: "I have an upcoming technical interview at Google. I'm comfortable with DSA but want to know what specific areas I should focus on and how to prepare effectively in the next two weeks.",
    tags: ["interview prep", "Google", "career advice"],
    askedBy: "Alex Chen",
    answers: 9,
    votes: 31,
    timeAgo: "4 hours ago",
    resolved: false,
  },
];

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Card className="mb-6">
              <CardHeader className="relative pb-0">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2">
                  <Edit className="h-4 w-4" />
                </Button>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center text-2xl mb-1">{user.name}</CardTitle>
                  <CardDescription className="text-center mb-2">@{user.username}</CardDescription>
                  <Badge className="mb-4">{user.role}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">College</p>
                    <p className="text-sm text-muted-foreground">{user.college}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Field of Study</p>
                    <p className="text-sm text-muted-foreground">{user.field}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Year</p>
                    <p className="text-sm text-muted-foreground">{user.year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Member Since</p>
                    <p className="text-sm text-muted-foreground">{user.joined}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Bio</p>
                    <p className="text-sm text-muted-foreground">{user.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Badges & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {user.badges.map((badge, index) => (
                  <Badge key={index} className={badge.color}>
                    {badge.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold">{user.stats.notes}</p>
                    <p className="text-sm text-muted-foreground">Notes</p>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold">{user.stats.queries}</p>
                    <p className="text-sm text-muted-foreground">Questions</p>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold">{user.stats.answers}</p>
                    <p className="text-sm text-muted-foreground">Answers</p>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold">{user.stats.contributions}</p>
                    <p className="text-sm text-muted-foreground">Contributions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </div>

            <Tabs defaultValue="notes" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="notes" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>My Notes</span>
                </TabsTrigger>
                <TabsTrigger value="questions" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>My Questions</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="notes" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {userNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="questions" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {userQueries.map((query) => (
                    <QueryCard key={query.id} {...query} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
