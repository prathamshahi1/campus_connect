
import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QueryCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  askedBy: string;
  answers: number;
  votes: number;
  timeAgo: string;
  resolved: boolean;
}

const QueryCard: FC<QueryCardProps> = ({
  id,
  title,
  description,
  tags,
  askedBy,
  answers,
  votes,
  timeAgo,
  resolved,
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-1">
          <Link to={`/forum/${id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          {resolved && (
            <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
              Resolved
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>By {askedBy}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t border-border flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 text-muted-foreground mr-1" />
            <span>{answers} answers</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 text-muted-foreground mr-1" />
            <span>{votes} votes</span>
          </div>
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link to={`/forum/${id}`}>View Question</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QueryCard;
