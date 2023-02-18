import { createGlobalStyle } from "styled-components";
import Roboto from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import PoppinsBold from "./assets/fonts/Poppins/Poppins-Bold.ttf";
import Poppins from "./assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsSemibold from "./assets/fonts/Poppins/Poppins-SemiBold.ttf";
import SFProMedium from "./assets/fonts/SF-Pro-Display/SF-Pro-Display-Medium.ttf";
import SFPro from "./assets/fonts/SF-Pro-Display/SF-Pro-Display-Regular.ttf";
import SFProSemibold from "./assets/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  src: url(${Poppins}) format('truetype');
}

@font-face {
  font-family: 'Poppins-Bold';
  src: url(${PoppinsBold}) format('truetype');
}

@font-face {
  font-family: 'Poppins-Semibold';
  src: url(${PoppinsSemibold}) format('truetype');
}

@font-face {
  font-family: 'SF-Pro';
  src: url(${SFPro}) format('truetype');
}

@font-face {
  font-family: 'SF-Pro-Medium';
  src: url(${SFProMedium}) format('truetype');
}

@font-face {
  font-family: 'SF-Pro-Semibold';
  src: url(${SFProSemibold}) format('truetype');
}
`;

export default FontStyles;
