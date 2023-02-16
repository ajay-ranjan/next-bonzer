// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("MAKE AN ARRAY WITH NO DUPLICATE VALUE");
console.log("=============== array=[1,3,5,6,1,5]===================")

const array=[1,3,5,6,1,5]
console.log(" new Set(array)=", new Set(array))
let newArray=[]

const removeDuplicate=(arr)=>{
    newArray=arr.map(e=>{
        if(!newArray.includes(e)){
            newArray.push(e)
            return e;
        }
    })
    console.log(newArray.filter(e=>e!==undefined));
}

removeDuplicate(array);
console.log("================================================")
console.log("============= ARRAY METHODS ====================")
console.log("================================================")
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"];
console.log("const fruits=", fruits)
console.log("================================================")
console.log(`fruits.join(",")=`,fruits.join(","))
console.log("fruits.pop()=",fruits.pop())

console.log(`fruits.push("Kiwi")=`,fruits.push("Kiwi")) // it returns only index where the item is pushed.

console.log("================================================")
console.log(`"fruits" constant value after pop operation changes to =`, fruits)
// call apply bind
// useref
// js part
// splice vs slice