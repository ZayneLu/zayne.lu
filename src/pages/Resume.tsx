import resumePdf from '../assets/Resume.pdf';

const Resume = () => {
  document.querySelector('body')?.setAttribute('style', 'background-color: #ecd29a;');
  return (
    <main id="resume">
      <section id="resume">
        <object
          style={{ width: '90%', height: '85%' }}
          data={resumePdf}
          type="application/pdf"
          title="My résumé"
        />
      </section>
    </main>
  );
};

export default Resume;
