/* eslint-disable max-len */
import gear from '../assets/gear.png';
import resumeIcon from '../assets/resume icon.png';
import envelope from '../assets/envelope.png';
import useWindowSize from '../useWindowSize';

function Home() {
  const windowSize = useWindowSize();

  return (
    <div id="content" style={{ height: windowSize.height, width: windowSize.width - 17 }}>
      <section className="box-orange">
        <div id="intro">
          <p className="boh">
            Hello, I&apos;m
          </p>
          <p id="big" className="boh">
            <span className="disappear boh">(Michael)</span>
            {' '}
            <strong className="boh">
              Zayne
              <br className="boh" />
              {' '}
              Lumpkin
            </strong>
            ,
          </p>
          <p className="boh">
            a software developer and computer science graduate student with interests in
            {' '}
            <strong className="gradientEmph boh">design</strong>
            ,
            {' '}
            <strong className="gradientEmph boh">algorithms</strong>
            ,
            {' '}
            <strong className="gradientEmph boh">audio</strong>
            ,
            {' '}
            <strong className="gradientEmph boh">systems</strong>
            , and
            {' '}
            <strong className="gradientEmph boh">people</strong>
            .
          </p>
        </div>
      </section>

      <div className="nothing"><div className="triangle-right">{null}</div></div>

      <section className="box-navy">
        <div className="ladyfinger-left"><p className="ladyfinger-contents">I specialize in React, TypeScript, C#, Java, and Python.</p></div>
        <div className="ladyfinger-right"><p className="ladyfinger-contents">I study at UT Dallas, with a concentration in traditional computer science.</p></div>
        <div className="ladyfinger-left"><p className="ladyfinger-contents">I am a National Merit Scholar with a 4.00 undergraduate and graduate GPA.</p></div>
        <div className="ladyfinger-right"><p className="ladyfinger-contents">I am a full-time software developer at Paycom.</p></div>
      </section>

      <div className="nothing"><div className="triangle-left" /></div>

      <section className="box-teal">
        <p id="liketotalk" className="pbh">
          I&apos;d like to talk to you about...
        </p>

        <section className="container">
          <div className="thirdBlock" style={{ backgroundColor: '#5b245c', color: 'white', order: -1 }}>
            <h2 className="pbh"> Programming & Research </h2>
            <p className="block-cont pbh">
              My research focus is on the history of programming languages and the development of conventions, but I&apos;m interested in far more than just that.
              <br />
              &nbsp; &nbsp;
              If you are a researcher, my
              inbox is open. I would love to read your paper, or contribute to any questions in my domain.
            </p>
          </div>
          <div className="thirdBlock" style={{ backgroundColor: '#3d245c', color: 'white', order: -1 }}>
            <h2 className="pbh"> Art & Music </h2>
            <p className="block-cont pbh">
              I am a performing musician of eleven years and have worked as an arranger, composer, producer, and audio engineer .
              I sing with the UT Dallas Chamber Singers, and I have previously been involved in a dozen bands and ensembles.
              <br />
              &nbsp; &nbsp;
              I practice photography and videography, and have a personal interest in industrial design, type, literature, and language.
            </p>
          </div>
          <div className="thirdBlock" style={{ backgroundColor: '#332e76', color: 'white', order: -1 }}>
            <h2 className="pbh"> Employment </h2>
            <p className="block-cont pbh">
              I am eager to contribute to meaningful work and solve meaningful challenges. If the work I do interests you, the
              work you do probably interests me, and I would thrilled to contribute. Feel free to reach out to me.
              <br />
              &nbsp; &nbsp;
              I am currently open to remote work, and work in the DFW Metroplex.
            </p>
          </div>
        </section>
      </section>

      <section className="box-cyan">
        <section className="container">
          <div className="logo-button">
            <img src={envelope} className="logo twh" alt="an icon of an envelope" />
            <h2 className="button-text">
              <a href="./contact" className="twh">contact</a>
            </h2>
          </div>
          <div className="logo-button">
            <img src={gear} className="logo twh" alt="an icon of a gear" />
            <h2 className="button-text">
              <a href="./projects" className="twh">projects</a>
            </h2>
          </div>
          <div className="logo-button">
            <img src={resumeIcon} className="logo twh" alt="an icon of a résumé" />
            <h2 className="button-text">
              <a href="./resume" className="twh">résumé</a>
            </h2>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
