function removeEven(arr) {
  let myArr = arr.filter((item) => {
    return item % 2;
  });
  return myArr;
}
let arr = [1, 3, 4, 6, 7, 8];
let data = removeEven(arr);
console.log(data);
let myStr = "Elie";
function makeCaps(myStr) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let item of myStr) {
    if (vowelArr.includes(item.toLocaleLowerCase())) {
      myStr = myStr.replace(item, item.toUpperCase());
    }
   
  }
  return myStr
}
let caps = makeCaps(myStr)
console.log(caps)
let maxArr = [1, 3, 4, 6, 7, 8, 2, 5];
function maxInArr(maxArr){
    
let max = Math.max(...maxArr);
return max
}
let max = maxInArr(maxArr)
console.log(max);
