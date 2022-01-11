let arr = [1, 3, 4, 6, 7, 8]

let myArr = arr.filter(item=>{
    return item%2
})
console.log(myArr)

let myStr = "Elie"
let vowelArr = ['a','e','i','o','u']
for(let item of myStr){
    if(vowelArr.includes(item.toLocaleLowerCase())){
        myStr = myStr.replace(item,item.toUpperCase())
    }
    console.log(myStr)

}

let maxArr = [1, 3, 4, 6, 7, 8, 2, 5]
let max= Math.max(...maxArr)
console.log(max)