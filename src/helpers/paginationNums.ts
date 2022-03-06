// adapted from https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
export const paginationNums = (
  current: number,
  maxPage: number
): (number | "...")[] => {
  const last = maxPage;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;

  const range = [];
  const rangeWithDots: number | "..."[] = [];
  let l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};
