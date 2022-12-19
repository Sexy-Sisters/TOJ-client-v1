import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
import { imageUpload } from "shared/utils/imageManager";
import { IImageUploadResponse } from "shared/utils/imageManager";
import { useToast } from "shared/hooks";
import curIsDark from "shared/utils/themeManager";

interface CustomEditor {
  editorRef: React.RefObject<Editor>;
  markDownStr: string;
}

const CustomEditor = (props: CustomEditor) => {
  const { onToast } = useToast();

  return (
    <Editor
      ref={props.editorRef}
      initialValue={props.markDownStr}
      previewStyle="vertical"
      height="600px"
      theme={curIsDark() ? "dark" : ""}
      hideModeSwitch={true}
      initialEditType="markdown"
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

            if (res.result === "FAIL" && res.message) {
              onToast("error", res.message);
              callback("", "plz different img");
            }
            if (res.result === "SUCCESS") {
              callback(res.data.imgUrlList[0], "img");
            }
          } catch (err) {
            console.log(err);
          }
        },
      }}
    />
  );
};

export default CustomEditor;
