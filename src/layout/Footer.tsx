import { Link } from "react-router";
import { FooterNav } from "../components/ui/nav/Nav";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-primary-900">
      <Wrapper>
        <div className="grid justify-center pt-4 pb-1">
          <Link to="/" className="text-text-light text-big flex items-center">
            skinny
            <span className="text-secondary-200 text-heading font-bold">K</span>
            <span className="text-secondary-100 text-reg ml-1 flex gap-1">
              <span className="-translate-y-1 rotate-12 inline-block">{`{`}</span>
              frontEndDev
              <span className="translate-y-1 rotate-12 inline-block">{`}`}</span>
            </span>
          </Link>
          <FooterNav />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
