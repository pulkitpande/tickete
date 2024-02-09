import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    _white: "#FFFFFF",
    _black: "#1C1C1C",
    _gray: "#636363",
    _lightgray: "#E3E3E3",
    _lightgreen : "#e9f9ee",
    _green : "#3ba172",
    _lightblue : "#f9f9fb"
  },
  styles: {
    global: {
      "*": {
        borderColor: "_lightgray",
      },
    },
    
  },
  shadows: {
    outline: `0 0 0 2px #636363`,
  },  
  
  breakpoints: {
    md: "70em",
  },
};

export { theme };

export default extendTheme(theme);
