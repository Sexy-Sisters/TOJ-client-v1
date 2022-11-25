import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../../../../shared/contexts";
import { darkTheme } from "../../../../shared/styles/theme";
import {
  HOME_URL,
  LOGO_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
} from "./Header.constant";
import {
  Header__block,
  Logo__block,
  UI__block,
  Logo,
  SignLink,
  ThemeButton,
  SignUp_button,
} from "./Header.style";

const Header = () => {
  const router = useRouter();
  const { curTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header__block>
      <Logo__block>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>
      </Logo__block>

      <UI__block>
        <SignLink href={SIGN_IN_URL}>Sign in</SignLink>
        <SignUp_button onClick={() => router.push(SIGN_UP_URL)}>
          Sign up
        </SignUp_button>
        <ThemeButton onClick={toggleTheme}>
          {curTheme === darkTheme ? "🌝" : "🌚"}
        </ThemeButton>
      </UI__block>
    </Header__block>
  );
};

export default Header;
