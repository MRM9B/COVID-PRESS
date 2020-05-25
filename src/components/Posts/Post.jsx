import React from "react";
import ReactDOM from "react-dom";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Component from "./component";


const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

function Post() {
  return (
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: Component.getTheme(muiBaseTheme)
        })}
      >
        <Component />
      </MuiThemeProvider>
  );
}


export default Post;