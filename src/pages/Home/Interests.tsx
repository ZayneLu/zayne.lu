type Interest = {
  title: string;
  paragraphs: string[];
}

const Interests = ({ interests }: {interests: Interest[]}) => (
  <section id="interests">
    <h2> I&apos;d like to talk to you about...</h2>
    <div id="container">
      {interests.map((interest) => (
        <section key={interest.title}>
          <h3>{interest.title}</h3>
          {interest.paragraphs.map((paragraph) => <p key={paragraph.slice(5)}>{paragraph}</p>)}
        </section>
      ))}
    </div>
  </section>
);

export default Interests;
export type { Interest };
