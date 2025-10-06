import NavLink from "./NavLink";

export const HeaderNav = () => {
  return (
    <nav>
      <ul
        aria-label="main navigation"
        role="navigation"
        className="flex gap-12"
      >
        <li>
          <NavLink path="/" label="home" />
        </li>
        <li>
          <NavLink path="/projects" label="projects" />
        </li>
      </ul>
    </nav>
  );
};

export const FooterNav = () => {
  return (
    <nav className=" rounded-md p-4 shadow-box-inset mb-4">
      <ul aria-label="footer links" role="navigation" className="grid gap-3">
        <li>
          <NavLink path="/" label="home" />
        </li>
        <li>
          <NavLink path="/projects" label="projects" />
        </li>
      </ul>
    </nav>
  );
};
