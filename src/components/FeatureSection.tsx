
import { BookOpen, MessageSquare, Users, FileText, Search, Award } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Notes & Resources",
    description:
      "Upload, share, and discover study materials from students across colleges and universities.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Q&A Forum",
    description:
      "Get your academic and career queries resolved by peers and experienced professionals.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Professional Network",
    description:
      "Connect with students, alumni, and recruiters to build your professional network.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Version Control",
    description:
      "Maintain and track different versions of your notes and collaborative documents.",
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Smart Search",
    description:
      "Find relevant notes, answers, and connections with our intelligent search system.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Recognition System",
    description:
      "Earn badges and recognition for your contributions to the community.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools necessary for your academic and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
