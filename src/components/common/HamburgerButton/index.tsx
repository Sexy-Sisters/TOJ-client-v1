import * as S from "./HamburgerButton.style";

interface IHamburgerButton {
  state: boolean;
  inSize: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({ state, inSize, onClick }: IHamburgerButton) => {
  return (
    <S.Hamburger
      className="hamburger-button"
      onClick={() => onClick(cur => !cur)}
      state={state}
      inSize={inSize}
    >
      <S.Hamburger__bar className="bar-one" />
      <S.Hamburger__bar className="bar-two" />
      <S.Hamburger__bar className="bar-three" />
    </S.Hamburger>
  );
};

export default HamburgerButton;
