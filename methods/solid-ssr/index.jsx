const methodName = 'solid-ssr';

import { renderToString } from "solid-js/web";

const RecursiveDivs = (props) => {
  const depth = () => props.depth
  const breadth = () => props.breadth

  let children = [];

  if (depth() > 0) {
    for (let i = 0; i < breadth(); i++) {
      children.push(
        <RecursiveDivs key={i} depth={depth() - 1} breadth={breadth() - 1} />
      );
    }
  }

  return (
    <>
      {depth() <= 0 ? (
        <div>abcdefghij</div>
      ) : (
        <div
          onClick={() => {
            console.log("clicked");
          }}
        >
          {children}
        </div>
      )}</>
  );
};

// this renders around 64472 divs
const App = () => <RecursiveDivs depth={5} breadth={11} />

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    renderToString(App);
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < 30; i += 1) {
    const start = process.hrtime();

    const markup = renderToString(App);
    
    time.push(process.hrtime(start));

    require('fs').writeFileSync('./dist/test.html', markup);

  }

  console.info("================ RESULT ================");
  const durations = time.map(t => (t[0] + t[1] / 1e9) * 1e3);

  durations.forEach((d, i) => {
    console.info(`Run ${i} took `, d, "ms");
  });
  
  console.info("================ SUMMARY ================");
  console.info(`[${methodName}]`);
  console.info(
    "Average is:",
    durations.reduce((a, b) => a + b) / durations.length,
    "ms"
  );
  console.info("Stdev is:", require("node-stdev").population(durations), "ms");

  require('fs').writeFileSync("./dist/result.json", JSON.stringify({
    name: methodName,
    average: durations.reduce((a, b) => a + b) / durations.length,
    stdev: require("node-stdev").population(durations),
  }));
};

warmUpV8();
benchmark();
