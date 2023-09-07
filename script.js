let h1 = document.querySelector('h1');

async function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

async function quickSort(arr, start, end) {
  if (start < end) {
    await sleep(500);
    h1.innerHTML = `[${arr}]`;
    let pi = await partition(arr, start, end);
    await quickSort(arr, start, pi - 1);
    await quickSort(arr, pi + 1, end);
  }
}

let arr = [10, 7, 8, 5, 3];
let num = arr.length;

quickSort(arr, 0, num - 1);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
