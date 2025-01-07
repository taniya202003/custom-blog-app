import React, { useRef } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import JoditEditor from "jodit-react";

export const BlogEditor = ({ setNewPostContent, newPostContent }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };
  return (
    <div>
      <JoditEditor
        ref={editor}
        config={config}
        value={newPostContent}
        onBlur={(value) => setNewPostContent(value)}
      />
    </div>
  );
};
