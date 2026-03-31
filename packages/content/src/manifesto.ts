import type { ManifestoStatement } from "./types";

export const manifesto: ManifestoStatement[] = [
  {
    number: "01",
    text: {
      en: "Code should be lightweight. Every kilobyte matters.",
      fr: "Le code doit etre leger. Chaque kilooctet compte.",
    },
    highlight: true,
  },
  {
    number: "02",
    text: {
      en: "Accessibility is not optional. It is a baseline.",
      fr: "L'accessibilite n'est pas optionnelle. C'est un minimum.",
    },
    highlight: false,
  },
  {
    number: "03",
    text: {
      en: "Ship less JavaScript. Let the browser do its job.",
      fr: "Moins de JavaScript. Laissez le navigateur faire son travail.",
    },
    highlight: true,
  },
  {
    number: "04",
    text: {
      en: "Design systems beat one-off styles. Always.",
      fr: "Les design systems battent les styles au cas par cas. Toujours.",
    },
    highlight: false,
  },
  {
    number: "05",
    text: {
      en: "Test behavior, not implementation.",
      fr: "Tester le comportement, pas l'implementation.",
    },
    highlight: true,
  },
];
