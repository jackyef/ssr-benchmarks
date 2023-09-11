let getMean = (data) => {
  return data.reduce(function (a, b) {
      return Number(a) + Number(b);
  }) / data.length;
};

export const getStandardDevitation = (data) => {
  let m = getMean(data);
  return Math.sqrt(data.reduce(function (sq, n) {
          return sq + Math.pow(n - m, 2);
      }, 0) / (data.length - 1));
};
