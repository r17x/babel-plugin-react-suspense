const pluginTester = require("babel-plugin-tester").default;
const plugin = require(".");
const path = require("path");

const fixtures = path.join(__dirname, "..", "fixtures");

const tests = [
  {
    title: "it will be transform a jsx with suspense attributes to be wrapped with suspense component",
    fixture: "basic",
    outputFixture: "basic",
  },
  {
    title: "it will be transformed with multiple element in single file",
    fixture: "multiple",
    outputFixture: "multiple",
  },
  {
    title: "it will import react when nothing import declaration",
    fixture: "no-react-import",
    outputFixture: "basic",
  },
  {
    title: "it will use imported Suspense from react",
    fixture: "imported-suspense",
    outputFixture: "imported-suspense",
  },
  // add new, after add new fixture
].map((test) => ({
  ...test,
  fixture: path.join(fixtures, test.fixture.concat(".input.js")),
  outputFixture: path.join(fixtures, test.outputFixture.concat(".output.js")),
}));

pluginTester({
  title: "babel-plugin-react-suspense-attributes",
  plugin,
  fixtures,
  filename: __filename,
  babelOptions: {
    parserOpts: {
      sourceType: "module",
      plugins: ["jsx"],
    },
  },
  tests,
});
