const Skills = ({ skills }: {skills: string[]}) => (
  <section id="skills">
    {skills.map((skill) => <p key={skill}>{skill}</p>)}
  </section>
);

export default Skills;
