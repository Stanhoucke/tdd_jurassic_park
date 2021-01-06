const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaurList1 = [];
  let dinosaurList2 = [];
  let park1;
  let park2;
  
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 20);
    dinosaurList1 = [dinosaur1];
    dinosaurList2 = [dinosaur1, dinosaur2];
    
    park1 = new Park("Jurassic Park", 10, dinosaurList1);
    park2 = new Park("Jurassic Park", 10, dinosaurList2);
  });

  it('should have a name', function () {
    const actual = park1.parkName;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park1.dinosaurs;
    assert.strictEqual(actual, dinosaurList1);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaur(dinosaur2);
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurList2);
  });
  
  it('should be able to remove a dinosaur from its collection', function () {
    park2.removeDinosaur(dinosaur2);
    const actual = park2.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurList1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park2.mostPopularDinosaur();
    assert.deepStrictEqual(actual, dinosaurList1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park2.dinosaurBySpecies('t-rex');
    assert.deepStrictEqual(actual, dinosaurList1);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park2.totalDailyVisitors();
    assert.strictEqual(actual, 70);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park2.totalYearlyVisitors();
    const expected = 70 * 365;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year');

});
