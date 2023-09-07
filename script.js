async function partition(arr, low, heigh) {
  let pivot = arr[heigh];
  let i = low - 1;
  for (let j = low; j < heigh; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[heigh]] = [arr[heigh], arr[i + 1]];
  return i + 1;
}

async function quickSort(arr, low, heigh) {
  if (low < heigh) {
    await sleep(1000);
    let pi = await partition(arr, low, heigh);
    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, heigh);
  }
}

let arr = [10, 7, 8, 3, 1, 5, 11, 22, 55, 9];
let N = arr.length;

quickSort(arr, 0, N - 1);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
