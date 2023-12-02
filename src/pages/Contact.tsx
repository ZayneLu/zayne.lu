import useWindowSize from '../useWindowSize';

function Contact() {
  const windowSize = useWindowSize();

  document.querySelector('body')?.setAttribute('style', 'background-color: #edc163;');
  return (
    <div id="content" style={{ ...windowSize }}>
      <section className="box-orange container-center">
        <div id="intro" className="centered-vert">
          <p id="big"><strong className="boh">Let&apos;s Talk.</strong></p>
          <p className="boh">
            You can connect on LinkedIn
            {' '}
            <a className="contact-info boh gradientEmphNavy" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zaynel/">here</a>
            ,
            <br className="boh" />
            and find my (personal) Github
            {' '}
            <a className="contact-info boh gradientEmphNavy" target="_blank" rel="noopener noreferrer" href="https://github.com/ZayneLu">here</a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
