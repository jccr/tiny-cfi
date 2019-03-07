import { generateCfiSteps } from "./tinycfi";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(
  `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div id="div-2">
      <p id="p-2">
        Hello world
      </p>
      <div></div>
      <div id="div-6"></div>
      <div></div>
    </div>
  </body>
</html>
  `
);

const targetElement = dom.window.document.querySelector("#div-6");

// should print: /4/2/6
console.log(generateCfiSteps.call(dom, targetElement));
