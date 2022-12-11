import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // basic color
    bgColor: string;
    textColor: string;

    // UI color
    input: string;
    inputHover: string;
    inputText: string;

    // state color
    error: string;
    success: string;

    // most color
    yellowColor: string;
    redColor: string;
    blueColor: string;
    greenColor: string;
  }
}
