

// let dinosaurs = ["dinosaur1", "dinosaur2"];

// console.log(dinosaurs);

// for (let i = 0; i < dinosaurs.length; i++) {
//     if (dinosaurs[i] === "dinosaur1") {
//         dinosaurs.splice(i, 1);
//     };
// };
// console.log(dinosaurs);

let dinosaursList = ["dinosaur1", "dinosaur2"];
const dinosaurs = [];
let species = 'carnivore';
for (let dinosaur of dinosaursList) {
    console.log(dinosaur);
    if (dinosaur.species === species) {
        dinosaurs.push(dinosaur);
    };
};
console.log(dinosaurs);

