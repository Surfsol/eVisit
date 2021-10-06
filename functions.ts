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


// What would you do differently if you had more time?
// Make a clean HashMap, that would store ip address and their counts
// in a higher bucket if their count increases.  That would make
// sorting and retrieving the top100 ip addresses more efficient.

// What is the runtime complexity of each function?
// function request_handled : constant time
// function top100 : O(n)
// function clear : constant time
// function quicksort : O(n log(n))

// How does your code work?
// Ip addresses are stored as keys in an object, with the value being the number
// of times the function is called with that ip address.  When request_handle is called 
// it searches the object to see if the ip address already exsits , 
// if so it adds 1 to the count , if not if creates the key value pair of the ip address 
// with a count of 1.

// Function top100 receives the object which stores the ip addresses and their count .
// An array is then created which only consists of the counts.
// The goal is to find the value of the 100th highest count. 
// In order to do this, the quickSort function is used to sort the counts
// in a more efficient manner than using a .sort().  Counts are sorted in an array.
// Once the values are sorted, the length of the array is determined, then 
// the 100th highest value is identified in the array.
// Now that we have this value, we loop through the object, and 
// create a new array of ip addresses whose counts are greater than or equal
// to the 100th highest value.


// What other approaches did you decide not to pursue?
// I implemented and pondered of a few different methods to sort the counts.
// I determined quickSort would be pretty efficient.
// I made a hash function to convert each string of the ip address to a number,
// and explored HashMaps.  To me it seems the ip addresses could be stored then
// moved into different buckets depending on the increase in count.


// How would you test this?
// First unit tests can be ran for each function.  Ensuring we are getting
// proper values and types.
// the function  performance.now() can be used to determine the speed 
// of the function top100.  A function could generate an object of 
// 20 million key value pairs, which could be used to test the speed of
// top100()
// Also, if more time were given, you would want to setup the api and 
// run end to end testing.