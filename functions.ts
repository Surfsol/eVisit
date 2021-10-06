type IpObject = {
  [key: number]: number;
};

let ipObject: IpObject = {};

// function hashIp(ip) {
//     let numString =""
//     for (let i = 0; i < ip.length; i++) {
//       const charCode = ip.charCodeAt(i);
//       let str = charCode.toString()
//       numString = `${numString}${str}`
//     }
//     return Number(numString)
//   }

// constant time
function request_handled(ip: string): void {
  if (ipObject[ip]) {
    ipObject[ip] += 1;
  } else {
    ipObject[ip] = 1;
  }
}

function swapValues(
  valuesArray: Array<number>,
  left: number,
  right: number
): void {
  let originalLeft: number = valuesArray[left];
  valuesArray[left] = valuesArray[right];
  valuesArray[right] = originalLeft;
}

function findUnOrdered(
  valuesArray: Array<number>,
  left: number,
  right: number
): number {
  let pivot: number = valuesArray[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (valuesArray[left] < pivot) {
      left++;
    }
    while (valuesArray[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swapValues(valuesArray, left, right);
      left++;
      right--;
    }
  }
  return left;
}
// O(n log(n))
function quickSort(
  valuesArray: Array<number>,
  left: number,
  right: number
): Array<number> {
  let pointer: number;
  if (valuesArray.length > 1) {
    pointer = findUnOrdered(valuesArray, left, right);

    if (left < pointer - 1) {
      console.log('left <', valuesArray, left, pointer);
      quickSort(valuesArray, left, pointer - 1);
    }

    if (pointer < right) {
      console.log('right <', valuesArray, pointer, right);
      quickSort(valuesArray, pointer, right);
    }
  }
  return valuesArray;
}

function top100(obj) {
  let valuesArray: Array<number> = Object.values(obj);   // O(n)
  let bottomValue: number;
  if (valuesArray.length > 3) {
    console.log('in top100');
    const sortedValues: Array<number> = quickSort(
      valuesArray,
      0,
      valuesArray.length - 1
    );

    bottomValue = sortedValues[sortedValues.length - 5];
  } else {
    bottomValue = valuesArray[0];
  }

  let top100Results = [];
  for (let [key, value] of Object.entries(obj)) { // O(n)
    if (value >= bottomValue) top100Results.push(key);
  }
  return top100Results;
}

top100(ipObject);

// constant time
function clear() {
  ipObject = {};
}

clear();