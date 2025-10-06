import { FooterNav } from "../components/ui/nav/Nav";
import Wrapper from "./Wrapper";
import LogoLink from "../components/ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-900">
      <Wrapper>
        <div className="grid justify-center pt-3 pb-7">
          <LogoLink />
          <FooterNav />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
