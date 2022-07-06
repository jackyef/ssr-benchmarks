const methodName = "vanilla-function"

const RecursiveDivs = (depth = 1, breadth = 1) => {
  if (depth <= 0) {
    return `<div>abcdefghij</div>`;
  }

  let children = [];

  for (let i = 0; i < breadth; i++) {
    children.push(RecursiveDivs(depth - 1, breadth - 1));
  }

  return `<div>${children.join('')}</div>`;
};

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    RecursiveDivs(5, 11);
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < 30; i += 1) {
    const start = performance.now();

    // this renders around 64472 divs
    const markup = RecursiveDivs(5, 11);
    
    time.push(performance.now() - start);

    require('fs').writeFileSync('./dist/test.html', markup);

  }

  console.info("================ RESULT ================");
  const durations = time.map(t => (t / 1e9) * 1e3);

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

