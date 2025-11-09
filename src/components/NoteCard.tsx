
import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star, Eye } from "lucide-react";

interface NoteCardProps {
  id: string;
  title: string;
  subject: string;
  college: string;
  uploadedBy: string;
  rating: number;
  downloads: number;
  views: number;
  fileType: "pdf" | "docx" | "ppt";
  dateUploaded: string;
}

const NoteCard: FC<NoteCardProps> = ({
  id,
  title,
  subject,
  college,
  uploadedBy,
  rating,
  downloads,
  views,
  fileType,
  dateUploaded,
}) => {
  const getFileTypeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-600";
      case "docx":
        return "bg-blue-100 text-blue-600";
      case "ppt":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Card className="overflow-hidden card-hover">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full uppercase ${getFileTypeColor(fileType)}`}>
              {fileType}
            </span>
            <Link to={`/notes/${id}`}>
              <h3 className="font-medium text-lg mt-2 hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-sm text-muted-foreground mb-2">
          <p>{subject}</p>
          <p>{college}</p>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>By {uploadedBy}</span>
          <span className="mx-2">•</span>
          <span>{dateUploaded}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t border-border flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Download className="h-4 w-4 text-muted-foreground mr-1" />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 text-muted-foreground mr-1" />
            <span>{views}</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="flex items-center gap-1">
          <Download className="h-3.5 w-3.5" />
          <span>Download</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
