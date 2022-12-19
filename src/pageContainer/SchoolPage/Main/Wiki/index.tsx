import React from "react";
import dynamic from "next/dynamic";
import school from "pageContainer/SchoolPage/api/school";
import { useToast } from "shared/hooks";
import { Editor } from "@toast-ui/react-editor";
import * as I from "pageContainer/SchoolPage/interface/main";
import * as S from "./Wiki.style";

const defaultWiki: I.IWiki = {
  id: -1,
  views: 0,
  html: "",
  markdown: "",
  name: "<h1>아직 학교에 아무도 없네요... 🤔</h1>",
};

const WikiEditor = dynamic(() => import("components/common/Editor"), {
  ssr: false,
});

const WikiViewer = dynamic(() => import("components/common/Viewer"), {
  ssr: false,
});

const Wiki = ({ schoolCode }: I.IGetWiki) => {
  const [wiki, setWiki] = React.useState<I.IWiki>(defaultWiki);
  const editorRef = React.useRef<Editor>(null);
  const [onEditor, setOnEditor] = React.useState<boolean>(false);
  const { onToast } = useToast();

  React.useEffect(() => {
    async function getWiki() {
      try {
        const { data: res } = (await school.get_wiki({
          schoolCode,
        })) as I.IGetWikiResponse;

        if (res.result === "SUCCESS") {
          setWiki(res.data);
        }
      } catch (err) {
        onToast("error", "예상치 못한 에러");
      }
    }
    getWiki();
  }, [schoolCode]);

  const wikiUpdate = async () => {
    if (editorRef.current) {
      const editorData = editorRef.current.getInstance();

      const newWiki: I.IUpdateWiki = {
        id: wiki.id,
        html: editorData.getHTML(),
        markdown: editorData.getMarkdown(),
      };
      try {
        await school.update_wiki(newWiki);
        onToast("success", "스쿨 위키 수정 완료");
        location.reload();
      } catch (err) {
        onToast("error", "스쿨 위키 수정 실패");
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>
          <S.Name dangerouslySetInnerHTML={{ __html: wiki.name }} />
        </S.Title>

        {onEditor ? (
          <>
            <S.Button onClick={() => wikiUpdate()}>Save</S.Button>
            <S.Button onClick={() => setOnEditor(false)}>Cancel</S.Button>

            <S.EditorContainer>
              <WikiEditor editorRef={editorRef} markDownStr={wiki.markdown} />
            </S.EditorContainer>
          </>
        ) : (
          <>
            <S.Button onClick={() => setOnEditor(true)}>Edit</S.Button>

            <S.ContentContainer>
              <S.WrapperViewer>
                <WikiViewer initialValue={wiki.markdown} />
              </S.WrapperViewer>
            </S.ContentContainer>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Wiki;
