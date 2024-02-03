import gear from '../../assets/gear.png';
import resume from '../../assets/resume icon.png';
import envelope from '../../assets/envelope.png';

const Links = () => (
  <nav id="links">
    <span>
      <img src={gear} alt="an icon of a gear" />
      <h3><a href="./projects">projects</a></h3>
    </span>
    <span>
      <img src={resume} alt="an icon of a résumé" />
      <h3><a href="./resume">résumé</a></h3>
    </span>
    <span>
      <img src={envelope} alt="an icon of an envelope" />
      <h3><a href="./contact">contact</a></h3>
    </span>
  </nav>
);

export default Links;
