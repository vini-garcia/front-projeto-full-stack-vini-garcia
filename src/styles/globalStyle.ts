import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  line-height: 150%;
  text-decoration: none;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  outline: none;
  list-style: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

:root {
  --brand-1: #4529E6;
  --brand-2: #5126EA;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD
  --grey-0: #0B0D0D;
  --grey-1: #212529;
  --grey-2: #495057;
  --grey-3: #868E96;
  --grey-4: #ADB5BD;
  --grey-5: #CED4DA;
  --grey-6: #DEE2E6;
  --grey-7: #E9ECEF;
  --grey-8: #F1F3F5;
  --grey-9: #F8F9FA;
  --grey-10: #FDFDFD;
  --white: #FFFFFF;
  --random-1: #E34D8C;
  --random-2: #7D2A4D;
  --random-3: #349974;
  --random-4: #153D2E;
  --random-5: #7000FF;
  --random-6: #30007D;
  --random-7: #349974;
  --random-8: #2a7d5f;
  --random-9: #153d2e;
  --random-10: #6100ff;
  --random-11: #5700e3;
  --random-12: #30007d;

  --alert-0: #CD2B31;
  --alert-1: #FDD8D8;
  --alert-2: #FFE5E5;
  --success-0: #18794E;
  --success-1: #CCEBD7;
  --success-2: #DDF3E4;
  --backdrop: #808080;
  --radius-4: 0.25rem;
  --radius-20: 1.25rem;
  --radius-50: 50%;

  body {
    width: 100%;
    height: 100%;
    min-width: 20rem;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--grey-2);
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
}
  
button {
	cursor: pointer;
}
`;
