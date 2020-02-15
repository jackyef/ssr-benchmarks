# ssr-benchmarks

Benchmarks of various approaches to SSR:
- ✅ react-ssr (using `react-dom`)
- ✅ preact-ssr (using `preact-render-to-string`)
- ✅ react-htm-ssr (using `react-dom` after transforming JSX to `htm` tagged template literals)
- ✅ preact-htm-ssr (using `preact-render-to-string` after transforming JSX to `htm` tagged template literals)
- ❌ react-esx-ssr (using `esx-js`) 
- ❌ lithtml-ssr (using [`@popesindustry/lit-html-server`](https://github.com/popeindustries/lit-html-server))
- Give me your ideas on what we should include in this benchmark! You can contribute directly, or just open an issue and name the approach you want to benchmark.

## Setup
This project uses `pnpm`. If you do not have `pnpm` yet, install it globally.
```
# npm
npm install -g pnpm

# yarn (v1)
yarn global add pnpm
```

Then just install the dependencies using `pnpm`
```
pnpm install
```

## Running the benchmarks
```
pnpm run build:all
pnpm run bench:all
```

## The benchmark
The benchmark tests various approaches to see how long it takes for each to render around 64000 divs on the server side. Basically it goes like this:
1. We warm up the v8 engine by rendering 20 times
2. We then run the actual benchmark by rendering 30 times
3. We collect the average time and the standard deviation
