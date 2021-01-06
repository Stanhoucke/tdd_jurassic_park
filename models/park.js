const Park = function(parkName, ticketPrice, dinosaurs=[]) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

module.exports = Park;