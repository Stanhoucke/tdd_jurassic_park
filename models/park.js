const Park = function(parkName, ticketPrice, dinosaurs=[]) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
    for (let i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i] === dinosaur) {
            this.dinosaurs.splice(i, 1);
        }
    }
};

Park.prototype.mostPopularDinosaur = function() {
    let popularDinosaur = [this.dinosaurs[0]];
    for (let i = 1; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].guestsAttractedPerDay > popularDinosaur.guestsAttractedPerDay) {
            popularDinosaur = [this.dinosaurs[i]];
        } else if (this.dinosaurs[i].guestsAttractedPerDay === popularDinosaur.guestsAttractedPerDay) {
            popularDinosaur.push(this.dinosaurs[i]);
        };
    };
    return popularDinosaur;
};

module.exports = Park;