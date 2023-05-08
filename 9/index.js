const out = document.getElementById("out");

const house = {
  roof: "уявіть зображення даху",
  secondFloar: "уявіть зображення другого поверху",
  firstFloar: "уявіть зображення першого поверху",
  basement: "зображення бази",
  address: "UK,London,Muswell Hill.N10",
};
out.textContent = `${house.roof}
${house.thirdFloar ? house.thirdFloar : ""}
${house.secondFloar}
${house.firstFloar}
${house.basement}
${house.address}

`;
