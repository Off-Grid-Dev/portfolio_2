import NavLink from "./NavLink";

export const HeaderNav = () => {
  return (
    <nav>
      <ul role="navigation" className="flex gap-12">
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
    <nav>
      <ul role="navigation" className="grid gap-12">
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
