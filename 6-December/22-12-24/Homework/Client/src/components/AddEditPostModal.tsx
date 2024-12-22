import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { IPost } from "@/types/postTypes";

interface AddEditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: IPost) => void;
  postToEdit?: IPost | null;
}

const AddEditPostModal = ({ isOpen, onClose, onSubmit, postToEdit }: AddEditPostModalProps) => {
  const [title, setTitle] = useState<string>(postToEdit?.title || "");
  const [content, setContent] = useState<string>(postToEdit?.content || "");

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [postToEdit]);

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{postToEdit ? "Edit Post" : "Add Post"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
            />
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {postToEdit ? "Update Post" : "Add Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPostModal;
