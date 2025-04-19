
import { useParams, useNavigate } from "react-router-dom";
import CommentaryDetail from "@/components/CommentaryDetail";
import Footer from "@/components/Footer";

const CommentaryDetailPage = () => {
  const { book = "", chapter = "1", verse = "1" } = useParams();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <CommentaryDetail 
          bookName={book} 
          chapter={parseInt(chapter)} 
          verse={parseInt(verse)} 
          onBack={handleBack}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CommentaryDetailPage;
