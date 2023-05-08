const out = document.getElementById("out");
const human = {
  firstName: "Alex",
  secondName: "Jazun",
  age: 27,
  occupation: "Microsoft",
};
function show() {
  out.textContent = `
    First name:${human.firstName}
    Second name:${human.secondName}
    Age:${human.age}
    Company:${human.occupation}
   `;
}
function changeWork(e) {
  human.occupation = e;
}
show();
changeWork("CyberBionic");
show();
