/*
Objects
    >Objects are unordered list which stores data in key value pairs

-When?
    >Unordered list
    >fast acess, insertion, removal O(1)
    >searching O(n)

-Methods
    >Object.keys(objName) -- O(n) loops through all the keys of the obj
    >Object.values(objName) -- O(n) loops through all values of the obj
    >Object.entries(objName) -- O(n) loops through obj and returns keys and value data pair
    >objName.hasOwnPropert("property") O(1) returns true or false based on presence of property 

Note - There is no order when storing value in object, more about working in HASH MAPS MODULE
*/

let obj = {
  name: "javascript",
  gender: "female",
  age: "25",
};

let keys = Object.keys(obj);
console.log(`Object.keys() :`, keys);
// Object.keys() : [ 'name', 'gender', 'age' ]

let values = Object.values(obj);
console.log(`Object.values() :`, values);
// Object.values() : [ 'javascript', 'female', '25' ]

let entries = Object.entries(obj);
console.log(`Object.entries() :`, entries);
// Object.entries() : [ [ 'name', 'javascript' ], [ 'gender', 'female' ], [ 'age', '25' ] ]

console.log(`hasOwnProperty() :`, obj.hasOwnProperty("name"));
// hasOwnProperty() : true

/*
Array
    >Ordered list stores data in indexed manner 

-When?
    >Ordered list
    >Fast acessing

    O(n) of array
    >acessing element, O(1)
        Acess element from an array by calling its index is constant time 
    
    >insertion 
        During insertion it depends on where we are inserting the element,
        - at end O(1), constant time to insert element at the end of the array
        -at beginning O(n), when we insert an element at the start of the array the indexing of the entire array changes, so time depends on the length of the array
    
    >removal 
        Same as insertion, at beginning O(n), as the indexing of the entire array should be done
    

-Array Methods
    >push O(1) add ele to the end of arr
    >pop O(1) remove ele from end of arr
    >unshift O(n) add ele at start of arr
    >shift O(n) remove ele from start of arr
    >concat O(n) add 2 or more array's together
    >slice O(n) copy a part of arr
    >splice O(n) cut a part of arr
    >sort O(n * logn) //i.e sorting algorithms, time taken is greater than O(n)
    >forEach(), map(), filter(), reduce() O(n)
 */
console.log(`//`);
console.log(`//`);

let arr = ["ricciardo", "hamilton", "vettel", "ocon"];
let arr1 = ["mclaren", "mercedes", "ferrari", "renault"];
arr.push("kimi ");
console.log(`push :`, arr);
arr.pop();
console.log(`pop`, arr);
arr.unshift("verstapan");
console.log(`unshift :`, arr);
arr.shift();
console.log(`shift :`, arr);
arr.concat(arr1);
console.log(`concat :`, arr);
let slice = arr.slice(0, 2);
console.log(`slice :`, slice);
arr.splice(3, 3);
console.log(`splice :`, arr);
arr.sort();
console.log(`sort :`, arr);
arr.forEach((e) => console.log(`each :`, e));

/*
sorting is O(n * log n ) which will be explained in sorting algortihms concept
*/
