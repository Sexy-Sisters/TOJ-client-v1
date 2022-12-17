import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import React from "react";

interface CustomEditor {
  editorRef: React.RefObject<Editor>;
  markDownStr: string;
}

type imgCallbackType = (url: string, text?: string) => void;

function CustomEditor(props: CustomEditor) {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  return (
    <Editor
      ref={props.editorRef}
      initialValue={props.markDownStr}
      previewStyle="vertical"
      height="600px"
      theme=""
      hideModeSwitch={true}
      initialEditType="markdown"
      toolbarItems={toolbarItems}
      useCommandShortcut={true}
      hooks={{
        addImageBlobHook: async (blob, callback) => {},
      }}
    />
  );
}

export default CustomEditor;
