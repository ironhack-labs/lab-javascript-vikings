// https://github.com/shouldjs/should.js
var should = require('chai').should();

// https://www.npmjs.com/package/faker
var faker  = require('faker');

// LIBRARY WE WANT TO TEST
var VikingBattle = require('../lib/viking.js');

//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
describe ('SOLDIERS', function () {
  var strength = 150;
  var health   = 300;

  before (function () {
    Soldier = VikingBattle.Soldier;
    soldier = new Soldier(health, strength);
  });

  it ('should have Object as its prototype', function () {
    Object.getPrototypeOf(soldier).should.be.an('Object');
  });

  it ('should have a number of health', function () {
    soldier.health.should.be.a('number');
    soldier.health.should.equal(health);
  });

  it ('should have a strength', function () {
    soldier.strength.should.be.a('number');
    soldier.strength.should.equal(strength);
  });

  it ('should have an attack function', function () {
    soldier.attack.should.be.a('Function');
    soldier.attack().should.equal(strength);
  });

  it ('should have a receiveDamage function', function () {
    soldier.receiveDamage.should.be.a('Function');
  });

  it ('should remove the received damage from his health', function () {
    var damage = 50;

    soldier.receiveDamage(damage);
    soldier.health.should.equal(health - damage);
  });
});

//------------------------------------------------------
// VIKING
//------------------------------------------------------
describe ('VIKINGS', function () {
  var name     = faker.name.findName();
  var strength = 150;
  var health   = 300;

  before (function () {
    Viking = VikingBattle.Viking;
    viking = new Viking(name, health, strength);
  });

  it ('should be derived from Soldier', function () {
    (viking instanceof Soldier).should.equal(true);
  });

  it ('should have a name', function () {
    viking.name.should.be.a('String');
    viking.name.should.equal(name);
  });

  it ('should have a health', function () {
    viking.health.should.be.a('number');
    viking.health.should.equal(health);
  });

  it ('should have a strength', function () {
    viking.strength.should.be.a('number');
    viking.strength.should.equal(strength);
  });

  it ('should have an attack function', function () {
    viking.attack.should.be.a('Function');
    viking.attack().should.equal(strength);
  });

  it ('should have a receiveDamage function', function () {
    viking.receiveDamage.should.be.a('Function');
  });

  it ('should remove the received damage from his health', function () {
    var damage = 50;

    viking.receiveDamage(damage).should.equal(name + ' has received ' + damage + ' points of damage');
    viking.health.should.equal(health - damage);
  });

  it ('should return "Odin Owns You All!" when battleCry is called', function () {
    viking.battleCry().should.be.a('string');
    viking.battleCry().should.equal('Odin Owns You All!');
  });

  it ('should return "{name} has died in act of combat" when the health is equal or lower than 0', function () {
    viking.receiveDamage(health).should.equal(name + ' has died in act of combat');
  });
});

//------------------------------------------------------
// SAXONS
//------------------------------------------------------
describe ('SAXONS', function () {
  var health = 60;
  var strength = 25;

  before (function () {
    Saxon = VikingBattle.Saxon;
    saxon = new Saxon(health, strength);
  });

  it ('should be derived from Soldier', function () {
    (saxon instanceof Soldier).should.equal(true);
  });

  it ('should have a health', function () {
    saxon.health.should.be.a('number');
    saxon.health.should.equal(health);
  });

  it ('should have a strength', function () {
    saxon.strength.should.be.a('number');
    saxon.strength.should.equal(strength);
  });

  it ('should have an attack function', function () {
    saxon.attack.should.be.a('Function');
    saxon.attack().should.equal(strength);
  });

  it ('should have a receiveDamage function', function () {
    saxon.receiveDamage.should.be.a('Function');
  });

  it ('should remove the received damage from his health', function () {
    var damage = 50;

    saxon.receiveDamage(damage).should.equal('A Saxon has received ' + damage + ' points of damage');
    saxon.health.should.equal(health - damage);
  });

  it ('should return "A Saxon has died in combat" when the health is equal or lower than 0', function () {
    saxon.receiveDamage(health).should.equal('A Saxon has died in combat');
  });
});

describe ('WAR', function () {
  function generateViking () {
    var name     = faker.name.findName();
    var health   = 300;
    var strength = 150;

    return new VikingBattle.Viking(name, health, strength);
  }

  function generateSaxon () {
    var health   = 60;
    var strength = 25;

    return new Saxon(health, strength);
  }

  before (function () {
    Viking = VikingBattle.Viking;
    Saxon  = VikingBattle.Saxon;
    War    = VikingBattle.War;

    viking = generateViking();
    saxon  = generateSaxon();
    war    = new War();
  });

  it ('should have an array of Vikings', function () {
    war.vikingsArmy.should.be.a('Array');
  });

  it ('should add Vikings to the army', function () {
    war.addViking.should.be.a('Function');
    war.addViking(viking);
    war.vikingsArmy.length.should.equal(1);
  });

  it ('should have an array of Saxons', function () {
    war.saxonsArmy.should.be.a('Array');
  });

  it ('should add saxons to the army', function () {
    war.addSaxon.should.be.a('Function');
    war.addSaxon (saxon);
    war.saxonsArmy.length.should.equal(1);
  });

  it ('should show the result of the saxon attack', function () {
    war.saxonAttack.should.be.a('Function');
    war.saxonAttack().should.equal(viking.name + ' has received ' + saxon.strength + ' points of damage');
  });

  it ('should show the result of the viking attack', function () {
    war.vikingAttack.should.be.a('Function');
    war.vikingAttack().should.equal('A Saxon has died in combat');
    war.saxonsArmy.length.should.equal(0);
  });

  it ('should has a fight function to start the combat', function () {
    war.fight.should.be.a('Function');
  });

  it ('should show show the final stats of the combat', function () {
    war.showStats.should.be.a('Function');
    war.showStats().should.equal('Vikings have won the war of the century!');
  });
});
