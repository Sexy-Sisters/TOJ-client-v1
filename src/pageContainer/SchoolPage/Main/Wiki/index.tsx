import dynamic from "next/dynamic";
import school from "pageContainer/SchoolPage/api/school";
import {
  IGetWiki,
  IGetWikiResponse,
  IUpdateWiki,
  IWiki,
} from "pageContainer/SchoolPage/interface/main";
import React from "react";
import * as S from "./Wiki.style";

const Editor = dynamic(() => import("../../../../components/common/Editor"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
}); // client 사이드에서만 동작되기 때문에 ssr false로 설정

const Wiki = ({ schoolCode }: IGetWiki) => {
  const [wiki, setWiki] = React.useState<IWiki>({
    id: -1,
    content: "",
    name: "<h1>아직 학교에 아무도 없네요... 🤔</h1>",
  });
  const [editHTML, setEditHTML] = React.useState<string>(wiki.content);
  const [onEditor, setOnEditor] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getWiki() {
      const { data: res } = (await school.get_wiki({
        schoolCode,
      })) as IGetWikiResponse;

      if (res.result === "SUCCESS") {
        setWiki(res.data);
        setEditHTML(res.data.content);
      }
    }
    getWiki();
  }, []);

  console.log(editHTML);

  const wikiSave = async () => {
    const updateWiki: IUpdateWiki = {
      id: wiki.id,
      content: editHTML,
    };
    const res = await school.update_wiki(updateWiki);
    console.log(res);
  };

  return (
    <>
      <S.Container>
        {onEditor ? (
          <>
            <S.Button onClick={() => wikiSave()}>Save</S.Button>
            <S.Button onClick={() => setOnEditor(false)}>Cancel</S.Button>

            <S.EditorContainer>
              <Editor htmlStr={editHTML} setHtmlStr={setEditHTML} />
            </S.EditorContainer>
          </>
        ) : (
          <>
            <S.Button onClick={() => setOnEditor(true)}>Edit</S.Button>

            <S.Title>
              <S.Name dangerouslySetInnerHTML={{ __html: wiki.name }} />
            </S.Title>

            <S.ContentContainer>
              <S.Content dangerouslySetInnerHTML={{ __html: wiki.content }} />
            </S.ContentContainer>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Wiki;
