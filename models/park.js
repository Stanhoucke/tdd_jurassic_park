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

Park.prototype.dinosaurBySpecies = function(species) {
    let dinosaurs = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaurs.push(dinosaur);
        };
    };
    return dinosaurs;
};

Park.prototype.totalDailyVisitors = function() {
    let totalDailyVisits = 0;
    for (let visits of this.dinosaurs) {
        totalDailyVisits += visits.guestsAttractedPerDay;
    };
    return totalDailyVisits;
};

Park.prototype.totalYearlyVisitors = function() {
    let totalYearlyVisitors = this.totalDailyVisitors() * 365;
    return totalYearlyVisitors;
};

Park.prototype.yearlyRevenue = function() {
    let revenue = this.ticketPrice * this.totalYearlyVisitors();
    return revenue;
};

// Extensions
Park.prototype.removeDinosaurBySpecies = function(species) {
    let newDinosaurList = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species !== species) {
            newDinosaurList.push(dinosaur);
        };
    };
    this.dinosaurs = newDinosaurList;
};

module.exports = Park;