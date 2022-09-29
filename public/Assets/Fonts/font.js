import { createGlobalStyle } from "styled-components";
//import MaisonBook from "./Bryndan_Write.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Maison Nueue';
    src: url(${MaisonBook});
  }
  .logotag {
     font-family: 'Maison Nueue';
  }
  .logosubtag{
    font-family: 'Maison Nueue';
    font-size:0.7rem;
    text-align:center;

  }
  .homeopagetitle{
    font-family: 'Maison Nueue';
    
    text-align:center;

  }
`;

export default GlobalStyle;
