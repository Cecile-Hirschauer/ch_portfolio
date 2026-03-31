import type { CraftValue } from "./types";

export const craft: CraftValue[] = [
  {
    title: "Eco-conception",
    description: {
      en: "Every page under 500 KB. System fonts, lazy images, zero trackers. The web should be light.",
      fr: "Chaque page sous 500 Ko. Polices systeme, images lazy, zero trackers. Le web doit etre leger.",
    },
  },
  {
    title: "Accessibility",
    description: {
      en: "WCAG AA compliance. Keyboard navigation, focus management, semantic HTML, screen reader tested.",
      fr: "Conformite WCAG AA. Navigation clavier, gestion du focus, HTML semantique, teste avec lecteur d'ecran.",
    },
  },
  {
    title: "TDD",
    description: {
      en: "Test-driven development. Write the test, watch it fail, make it pass. Confidence in every change.",
      fr: "Developpement guide par les tests. Ecrire le test, le voir echouer, le faire passer. Confiance a chaque changement.",
    },
  },
  {
    title: "Design Systems",
    description: {
      en: "Tokens, components, documentation. Consistent UI from atoms to pages, built for reuse.",
      fr: "Tokens, composants, documentation. UI coherente des atomes aux pages, concue pour la reutilisation.",
    },
  },
];
