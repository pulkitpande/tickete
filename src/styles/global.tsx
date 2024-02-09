import { Global, css } from "@emotion/react";

const CSS = css`
  html {
    scroll-behavior: smooth;
  }
`;

function GlobalCSS() {
  return <Global styles={CSS} />;
}

export default GlobalCSS;
