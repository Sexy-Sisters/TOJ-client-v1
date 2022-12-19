import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import curIsDark from "shared/utils/themeManager";

function CustomViewer(props: { initialValue: string }) {
  return (
    <Viewer
      theme={curIsDark() ? "dark" : "light"}
      initialValue={props.initialValue}
    />
  );
}

export default CustomViewer;
