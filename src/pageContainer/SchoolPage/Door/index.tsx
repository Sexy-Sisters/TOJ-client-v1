import React from "react";
import Wiki from "./Wiki";
import * as S from "./Door.style";
import { useRouter } from "next/router";
import { SIGN_IN_URL } from "shared/constants/urls";
import { useToast } from "shared/hooks";
import { ownToken } from "shared/utils/tokenManager";
import { IImageUploadResponse, imageUpload } from "shared/utils/imageManager";
import { EXCEPTION_MSG } from "shared/constants";

const DoorPage = () => {
  const { query, push } = useRouter();
  const { onToast } = useToast();
  const [initialSchool, setInitialSchool] = React.useState<{
    code: string;
    grade: string;
  } | null>(null);
  const [bgImg, setBgImg] = React.useState<string>("/image/school_bg.png");
  const bgRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!ownToken()) {
      push(SIGN_IN_URL);
      onToast("error", "로그인이 필요합니다");
    } else {
      const schoolData = query.schoolData;

      if (typeof schoolData === "string") {
        const [grade, code] = schoolData.split("&");
        setInitialSchool({ grade, code });
      }
    }
  }, [query]);

  const onBgUpload = async () => {
    const image = new FormData();
    if (bgRef.current?.files) {
      image.append("images", bgRef.current.files[0]);
    }

    try {
      const { data: res } = (await imageUpload({
        dir: "SCHOOL",
        images: image,
      })) as IImageUploadResponse;

      if (res.result === "SUCCESS") {
        setBgImg(res.data.imgUrlList[0]);
      }
      if (res.result === "FAIL" && res.message) {
        onToast("error", res.message);
      }
    } catch (err) {
      onToast("error", EXCEPTION_MSG);
    }
  };

  return (
    <S.PageContainer>
      <S.BgContainer>
        <S.BackgroundPhoto
          src={bgImg}
          alt="학교 메인 페이지 배경 사진"
          width={1000}
          height={400}
          layout="responsive"
        />

        <S.BgChanger>
          커버
          <input
            ref={bgRef}
            id="bg-img"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onBgUpload}
          />
        </S.BgChanger>
      </S.BgContainer>

      <S.WikiContainer>
        <S.JoinButton>Join</S.JoinButton>

        {initialSchool && <Wiki schoolCode={initialSchool.code} />}
      </S.WikiContainer>
    </S.PageContainer>
  );
};

export default DoorPage;
