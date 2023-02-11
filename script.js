/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.filter((arr)=> arr.marks > 50)
  arr.map((arr)=>console.log(arr));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) => {
    if(arr.marks > 50){
      console.log(arr);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newarr = {id: 4, name: "susan", age: "20", marks: 45};
  arr.push(newarr);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let updatedarr  = arr.filter((arr) => arr.marks <= 50);
  console.log(updatedarr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newarr = [
    { id: 5, name: "tim", age: "22", marks: 60 },
    { id: 6, name: "jane", age: "18", marks: 75 },
    { id: 7, name: "sam", age: "20", marks: 80 },
  ];
  let concatenateArra = arr.concat(newarr);
  console.log(concatenateArra);
}
