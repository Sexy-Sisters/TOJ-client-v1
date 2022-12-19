import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background-color: ${props => props.theme.bgColor};
  
  * {
    font-family: "Noto Sans KR", sans-serif;
    transition: background-color 0.5s;
  }

  
  .swal2-toast {
    font-size: 14px;
    background-color: ${props => props.theme.modalBg} !important;
  }
  .swal2-title {     
    color: ${props => props.theme.textColor};
  }
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration-line: none;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
input {
  background: none;
  border: none;
  outline: none;
  padding: 0;
}
`;
