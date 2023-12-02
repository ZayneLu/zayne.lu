import '../styles.css';

function Nav() {
  return (
    <nav style={{ color: '#ecd29a' }} id="nav-bar">
      <div id="nav-contents">
        <h3 id="nav-name" className="obh"><a style={{ textDecoration: 'none', color: 'inherit' }} href="/">ZAYNE.LU</a></h3>
        <div id="nav-buttons">
          <h3 className="button-text obh beige"><a href="/contact">contact</a></h3>
          <h3 className="button-text obh beige"><a href="/projects">projects</a></h3>
          <h3 className="button-text obh beige"><a href="/resume">résumé</a></h3>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
