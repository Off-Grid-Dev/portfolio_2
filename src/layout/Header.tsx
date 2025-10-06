import { HeaderNav } from "../components/ui/nav/Nav";
import Wrapper from "./Wrapper";
import LogoLink from "../components/ui/Logo";

const Header = () => {
  return (
    <header className="bg-primary-900">
      <Wrapper>
        <div className="flex justify-between items-center pt-4 pb-1">
          <LogoLink />
          <HeaderNav />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
