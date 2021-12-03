import "../styles/globals.css";
import * as NextImage from "next/image";
import { GlobalStyles } from "twin.macro";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story) => (
  <div>
    <GlobalStyles />
    <Story />
  </div>
)]