let arr = process.argv;
let sum = 0;
for (var i = 2; i < arr.length; i++) {
  sum += parseInt(arr[i]);
}
console.log(sum);