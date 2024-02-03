import Introduction from './Introduction';
import Skills from './Skills';
import Links from './Links';
import { interests, skills } from './text';
import Interests from './Interests';

const Home = () => (
  <main>
    <Introduction />
    <Skills skills={skills} />
    <Interests interests={interests} />
    <Links />
  </main>
);

export default Home;
