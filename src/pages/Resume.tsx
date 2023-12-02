import resumePdf from '../assets/Resume.pdf';
import useWindowSize from '../useWindowSize';

function Resume() {
  const windowSize = useWindowSize();
  document.querySelector('body')?.setAttribute('style', 'background-color: #ecd29a;');
  return (
    <div id="content" style={{ ...windowSize }}>
      <object
        style={{ height: '1000px' }}
        data={resumePdf}
        type="application/pdf"
        title="My résumé"
      />
    </div>
  );
}

export default Resume;
