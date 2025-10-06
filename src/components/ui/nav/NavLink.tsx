import type { FC } from "react";
import { Link } from "react-router";

type NavLinkProps = {
  label: string;
  path: string;
};

const NavLink: FC<NavLinkProps> = ({ label, path }) => {
  return (
    <Link
      to={path}
      aria-label={`link to ${label}`}
      className="text-text-light text-regular hover:text-secondary-100 transition duration-200 hover:duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:inset-x-0.5 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:to-secondary-100 after:from-45% after:to-69% after:bg-size-[400%] after:bg-left hover:after:bg-right after:transition-[background-position] hover:after:duration-700 after:duration-300"
    >
      {label}
    </Link>
  );
};

export default NavLink;
