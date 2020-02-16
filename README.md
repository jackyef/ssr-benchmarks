# ssr-benchmarks

> Want to see the results? Go straight to [result.md](./result.md)

Benchmarks of various approaches to SSR:
- ✅ react-ssr (using `react-dom`)
- ✅ preact-ssr (using `preact-render-to-string`)
- ✅ react-htm-ssr (using `react-dom` after transforming JSX to `htm` tagged template literals)
- ✅ preact-htm-ssr (using `preact-render-to-string` after transforming JSX to `htm` tagged template literals)
- ✅ react-esx-ssr (using `esx-js`) 
- ✅ lithtml-ssr (using [`@popeindustries/lit-html-server`](https://github.com/popeindustries/lit-html-server))
- ✅ svelte-ssr
- ⚠️ vue-ssr (the numbers seem very out-of-place, I might have implemented it wrongly. If you know about vue, please consider helping by taking a look at `methods/vue-ssr` implementation)
- :x: ejs
- :x: plain old javascript function
- :x: vhtml
- :x: vhtml-htm
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

Result is outputted to `result.md`

## The benchmark
The benchmark tests various approaches to see how long it takes for each to render around 64000 `<div>`s on the server side. Basically it goes like this:
1. We warm up the v8 engine by rendering 20 times
2. We then run the actual benchmark by rendering 30 times
3. We collect the average time and the standard deviation
