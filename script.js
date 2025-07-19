let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function ConcatenateArray() {
  let newArray = [
    { id: 5, name: "alice", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "25", profession: "designer" },
    { id: 7, name: "charlie", age: "24", profession: "manager" }
  ];

  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
