type NavItem = [string, string]
const navItems: NavItem[] = [
  ['résumé', '/resume'],
  ['projects', '/projects'],
  ['contact', '/contact'],
];

const Header = () => (
  <header>
    <h1 title="domain name">
      <a href="/">
        ZAYNE.LU
      </a>
    </h1>
    <nav id="header-buttons">
      {navItems.map((item) => <a href={item[1]} key={item[0]}>{item[0]}</a>)}
    </nav>
  </header>
);

export default Header;
