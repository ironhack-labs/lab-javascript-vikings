// Soldier
class Soldier {
  constructor(health, strength) {
    this.health= health
    this.strength= strength
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health-=damage;

    
  }
 
}


// Viking
class Viking extends Soldier  {
  constructor(name, health, strength) {
    super(health, strength);
    this.name= name
  }
  receiveDamage(damage) {
    this.health-=damage
    if(this.health>0) {
      return `${this.name} has received ${damage} points of damage`
    }
    return `${this.name} has died in act of combat`
  }
  battleCry () {
    return `Odin Owns You All!`
  }
}
  


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health-=damage
    if(this.health>0) {
      return `A Saxon has received ${damage} points of damage`
    }
    return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  addViking(viking) {
    this.vikingArmy.push(viking) 

  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    let viking= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let saxon= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    this.saxonArmy.splice(this.saxonArmy.filter(x=>x.health<=0),1);
    return saxon.receiveDamage(viking.strength);
  }
  saxonAttack() {
    let viking= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let saxon= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    this.vikingArmy=this.vikingArmy.filter(x=>x.health>0);
    return viking.receiveDamage(saxon.strength);
  }
  showStatus() {
    if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
    if (this.saxonArmy.length===0) return `Vikings have won the war of the century!`;
    if (this.vikingArmy.length===0) return `Saxons have fought for their lives and survive another day...`;
    
  }

  
}


// describe("War", function () {
//   var viking, saxon, war;

//   function generateViking () {
//     var name     = "Harald";
//     var strength = 150;
//     var health   = 300;

//     return new Viking(name, health, strength);
//   }

//   function generateSaxon () {
//     var health   = 60;
//     var strength = 25;

//     return new Saxon(health, strength);
//   }

//   beforeEach(function () {
//     viking = generateViking();
//     saxon  = generateSaxon();
//     war    = new War();
//   });

//   describe("constructor function", function () {
//     it("should receive 0 arguments", function () {
//       expect(War.length).toEqual(0);
//     });

//     it("should assign an empty array to the vikingArmy property", function () {
//       expect(war.vikingArmy).toEqual([]);
//     });

//     it("should assign an empty array to the saxonArmy property", function () {
//       expect(war.saxonArmy).toEqual([]);
//     });
//   });