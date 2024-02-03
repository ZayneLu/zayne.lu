import { Interest } from './Interests';

const skills = [
  'I specialize in React, TypeScript, C#, Java, and Python.',
  'I study at UT Dallas, with a concentration in traditional computer science.',
  'I am a National Merit Scholar with a 4.00 undergraduate and graduate GPA.',
  'I am a full-time software developer at Paycom.',
];

const interests: Interest[] = [
  {
    title: 'Employment',
    paragraphs: [
      `I am eager to contribute to meaningful work and solve meaningful challenges.
      If the work I do interests you, the work you do probably interests me, and I
      would thrilled to contribute. Feel free to reach out to me.`,
      'I am open to remote work, and currently reside in the DFW Metroplex.',
    ],
  },
  {
    title: 'Art & Music',
    paragraphs: [
      `I am a performing musician of eleven years and have worked as an arranger,
      composer, producer, and audio engineer. I sing with the UT Dallas Chamber
      Singers, and I have previously been involved in a dozen bands and ensembles.`,
      `I practice photography and videography, and have a personal interest in
      industrial design, type, literature, and language.`,
    ],
  },
  {
    title: 'Programming & Research',
    paragraphs: [
      `My research focus is on the history of programming languages and the
      development of conventions, but I'm interested in far more than just that.`,
      `If you are a researcher, my inbox is open. I would love to read your paper,
      or contribute to any questions in my domain.`,
    ],
  },
];

export { skills, interests };
