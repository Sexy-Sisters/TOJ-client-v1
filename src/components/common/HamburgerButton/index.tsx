import { Hamburger, Hamburger__bar } from "./HamburgerButton.style";

interface IHamburgerButton {
  state: boolean;
  reWidth: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({ state, reWidth, onClick }: IHamburgerButton) => {
  return (
    <Hamburger
      className="hamburger-button"
      onClick={() => onClick(cur => !cur)}
      state={state}
      reWidth={reWidth}
    >
      <Hamburger__bar className="bar-one" />
      <Hamburger__bar className="bar-two" />
      <Hamburger__bar className="bar-three" />
    </Hamburger>
  );
};

export default HamburgerButton;
