const Skills = ({ skills }: {skills: string[]}) => (
  <section id="skills">
    <div className="triangleRight" />
    {skills.map((skill) => <p key={skill}>{skill}</p>)}
  </section>
);

export default Skills;
