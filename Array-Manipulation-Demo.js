let section_A = ["Ali", "Ahmed", "Akhter", "Taha"]

let section_B = ["Romail", "Usaid", "Aaraaf", "Nasir"]

console.log("Array Merged Using Concat Method: ");
let merge_Array_01 = section_A.concat(section_B)
console.log(merge_Array_01)

console.log("Array Merged Using Push Method: ");
section_A.push(section_B)
console.log(section_A);

console.log("Use of Flat Method: ");

let new_Array = ["Manesh", "Anand", ["Mohit", "Manav", ["Dileep", "Chander"], "Prakash"]]
let flat_Array = new_Array.flat(Infinity)
console.log(flat_Array);

console.log("All Array Merged: ");

let final_Merged_List = [...section_A, ...section_B, ...flat_Array]
console.log(final_Merged_List);

console.log("Use of is_Array method: ");

let is_Arr = Array.isArray(final_Merged_List)
console.log(is_Arr);

console.log("Use of Array.From Method :");
let str = "12345"
let arr2 = Array.from(str)
console.log(arr2)

console.log("use of Array.of Method: ");
let num1 = 23
let num2 = 99
let num3 = 105

let arr_Merge = Array.of(num1,num2,num3)
console.log(arr_Merge);



