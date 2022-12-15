import React from "react";
import "react-quill/dist/quill.snow.css";
import { NextPage } from "next";
import ReactQuill from "react-quill";
import { RangeStatic } from "quill";
import {
  IImageUploadResponse,
  imageUpload,
} from "../../../../shared/utils/imageManager";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { stringify } from "querystring";

interface IEditor {
  htmlStr: string;
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: NextPage<IEditor> = ({ htmlStr, setHtmlStr }) => {
  const quillRef = React.useRef<ReactQuill>(null);

  // 이미지 업로드 핸들러, modules 설정보다 위에 있어야 정상 적용
  const imageHandler = () => {
    // file input 임의 생성
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    let imageUrl = "";

    input.onchange = async () => {
      if (input.files) {
        const formData = new FormData();
        formData.append("wiki_img", input.files[0]);

        try {
          // file 데이터 담아서 서버에 전달하여 이미지 업로드
          const res = (await imageUpload({
            dir: "WIKI",
            images: formData,
          })) as IImageUploadResponse;

          imageUrl = res.data.imgUrlList[0];
        } catch (err) {
          console.log(err);
        }
      }

      if (quillRef.current) {
        // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
        const index = (
          quillRef.current.getEditor().getSelection() as RangeStatic
        ).index;

        const quillEditor = quillRef.current.getEditor();
        quillEditor.setSelection(index, 1);

        quillEditor.clipboard.dangerouslyPasteHTML(
          index,
          `<img src=${imageUrl} alt=${"wiki image"} />`,
        );
      }
    };
  };

  // useMemo를 사용하지 않고 handler를 등록할 경우 타이핑 할때마다 focus가 벗어남
  const modules = React.useMemo(
    () => ({
      toolbar: {
        // container에 등록되는 순서대로 tool 배치
        container: [
          [{ font: [] }], // font 설정
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // header 설정
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"], // 굵기, 기울기, 밑줄 등 부가 tool 설정
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ], // 리스트, 인덴트 설정
          ["image"], // 이미지 업로드 설정
          [{ align: [] }, { color: [] }, { background: [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
          ["clean"], // toolbar 설정 초기화 설정
        ],

        // custom 핸들러 설정
        handlers: {
          image: imageHandler, // 이미지 tool 사용에 대한 핸들러 설정
        },
      },
    }),
    [],
  );

  // toolbar에 사용되는 tool format
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <ReactQuill
      theme="snow"
      ref={quillRef}
      modules={modules}
      formats={formats}
      value={htmlStr}
      placeholder="fill out the school wiki..."
      onChange={(content, delta, source, editor) =>
        setHtmlStr(editor.getHTML())
      }
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Editor;
