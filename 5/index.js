const out = document.getElementById("out");
const human = {};
human.firstName = "Alex";
human.secondName = "Jazun";
human.age = 27;
human.occupation = {};
human.occupation.company = "Microsoft";
human.occupation.position = "Full Stack Developer";
out.textContent = `First name:${human.firstName}
Second name:${human.secondName}
Age:${human.age}
Company:${human.occupation.company}
Position:${human.occupation.position}`;
