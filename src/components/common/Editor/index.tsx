import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import React from "react";
import { IImageUploadResponse, imageUpload } from "shared/utils/imageManager";
import { useToast } from "shared/hooks";

interface CustomEditor {
  editorRef: React.RefObject<Editor>;
  markDownStr: string;
}

function CustomEditor(props: CustomEditor) {
  const { onToast } = useToast();

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
        addImageBlobHook: async (blob, callback) => {
          const image = new FormData();
          image.append("images", blob);

          try {
            const { data: res } = (await imageUpload({
              dir: "WIKI",
              images: image,
            })) as IImageUploadResponse;

            console.log(res);

            // if (res.result) {
            //   onToast("error", "사진의 이름이 너무 깁니다");
            //   callback("", "rejected img");
            // } else {
            //   callback(res.imgUrlList[0], "img");
            // }
          } catch (err) {
            console.log(err);
          }
        },
      }}
    />
  );
}

export default CustomEditor;
