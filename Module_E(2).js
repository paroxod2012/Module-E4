function showOwnProps(obj) {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += key + ": " + obj[key] + "\n";
    }
  }
  console.log(result);
}


const student1 = {
  name: "Alex",
  ownCity: "Tver",
  age: 19,
  course: "Frontend"
};

const student2 = Object.create(student1)
student2.gender = 'm';

console.log(student2)
showOwnProps(student1);