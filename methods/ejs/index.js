const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const absPath = path.join(__dirname, "./RecursiveDivs.ejs");

const options = {
  cache: true,
  filename: absPath
};

const templateFile = fs.readFileSync(absPath, "utf-8");
const template = ejs.compile(templateFile, options);

const methodName = "ejs";

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    template({ depth: 5, breadth: 11, filePath: absPath });
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < 30; i += 1) {
    const start = performance.now();

    // this renders around 64472 divs
    const markup = template({ depth: 5, breadth: 11, filePath: absPath });

    time.push(performance.now() - start);

    require("fs").writeFileSync("./dist/test.html", markup);
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

  require("fs").writeFileSync(
    "./dist/result.json",
    JSON.stringify({
      name: methodName,
      average: durations.reduce((a, b) => a + b) / durations.length,
      stdev: require("node-stdev").population(durations)
    })
  );
};

warmUpV8();
benchmark();
