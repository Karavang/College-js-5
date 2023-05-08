const out = document.getElementById("out");

const person = {
  firstName: "Jim",
  lastName: "Rainbow",
  age: 30,
  occupation: "Web Developer",
};
out.textContent = `${person.firstName} ${person.lastName}`;
person.age = 25;
out.textContent += `  Age:${person.age} y.o.`;
