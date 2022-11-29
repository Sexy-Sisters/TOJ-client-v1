import { Hamburger, Hamburger__bar } from "./HamburgerButton.style";

interface IHamburgerButton {
  power: boolean;
  onSize: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({ power, onSize, onClick }: IHamburgerButton) => {
  return (
    <Hamburger
      className="hamburger-button"
      onClick={() => onClick(cur => !cur)}
      power={power}
      onSize={onSize}
    >
      <Hamburger__bar className="bar-one" />
      <Hamburger__bar className="bar-two" />
      <Hamburger__bar className="bar-three" />
    </Hamburger>
  );
};

export default HamburgerButton;
