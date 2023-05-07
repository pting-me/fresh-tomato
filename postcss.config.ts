import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import nesting from "postcss-nesting";

const config = {
  plugins: [
    autoprefixer(),
    nesting(),
    csso(),
  ],
  from: "./static/style.css",
};

export default config;
