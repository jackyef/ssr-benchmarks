import RecursiveDivs from './components/RecursiveDivs.svelte';
import { writeFileSync } from 'fs';
import { getStandardDevitation } from './stats';

const methodName = 'svelte-ssr';

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    RecursiveDivs.render({ depth: 5, breadth: 11 });
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < 30; i += 1) {
    const start = process.hrtime();

    // this renders around 64472 divs
    const { html: markup } = RecursiveDivs.render({ depth: 5, breadth: 11 });
    
    time.push(process.hrtime(start));

    writeFileSync('./dist/test.html', markup);

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
  console.info("Stdev is:", getStandardDevitation(durations), "ms");

  writeFileSync("./dist/result.json", JSON.stringify({
    name: methodName,
    average: durations.reduce((a, b) => a + b) / durations.length,
    stdev: getStandardDevitation(durations),
  }));
};

warmUpV8();
benchmark();
