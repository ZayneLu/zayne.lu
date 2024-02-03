const Contact = () => {
  document.querySelector('body')?.setAttribute('style', 'background-color: #edc163;');
  return (
    <main>
      <section id="contact">
        <strong>Let&apos;s Talk.</strong>
        <p>
          You can connect on LinkedIn
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zaynel/">here</a>
          ,
          <br className="boh" />
          and find my (personal) GitHub
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZayneLu">here</a>
          .
        </p>
      </section>
    </main>
  );
};

export default Contact;
