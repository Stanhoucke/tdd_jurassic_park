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

  // console.log(park1.addDinosaur(dinosaur2));
  // console.log(park1.dinosaurs);


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

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
