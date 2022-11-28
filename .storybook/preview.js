import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) => {
      const s = a[1].kind !== b[1].kind ? 0 : a[1].name.localeCompare(b[1].name, undefined, { numeric: true });
      return s;
    }
  },
}