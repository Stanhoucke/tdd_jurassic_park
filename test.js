

let dinosaurs = ["dinosaur1", "dinosaur2"];

console.log(dinosaurs);

for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i] === "dinosaur1") {
        dinosaurs.splice(i, 1);
    };
};
console.log(dinosaurs);