import dynamic from "next/dynamic";
import school from "pageContainer/SchoolPage/api/school";
import React from "react";
import { useToast } from "shared/hooks";
import * as I from "pageContainer/SchoolPage/interface/main";
import * as S from "./Wiki.style";
import { Editor } from "@toast-ui/react-editor";

const defaultWiki: I.IWiki = {
  id: -1,
  views: 0,
  html: "",
  markdown: "",
  name: "<h1>아직 학교에 아무도 없네요... 🤔</h1>",
};

const PostEditor = dynamic(() => import("components/common/Editor"), {
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
  }, []);

  const wikiUpdate = async () => {
    if (editorRef.current) {
      const editorData = editorRef.current.getInstance();

      const newWiki: I.IUpdateWiki = {
        id: wiki.id,
        html: editorData.getHTML(),
        markdown: editorData.getMarkdown(),
      };
      try {
        const res = await school.update_wiki(newWiki);
        console.log(res);
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
              <PostEditor editorRef={editorRef} markDownStr={wiki.markdown} />
            </S.EditorContainer>
          </>
        ) : (
          <>
            <S.Button onClick={() => setOnEditor(true)}>Edit</S.Button>

            <S.ContentContainer>
              <S.Content dangerouslySetInnerHTML={{ __html: wiki.html }} />
            </S.ContentContainer>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Wiki;
