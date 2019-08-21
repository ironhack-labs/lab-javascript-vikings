// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    let response = "";
    super.receiveDamage(damage);
    if (this.health > 0) {
      response = `${this.name} has received ${damage} points of damage`;
    } else response = `${this.name} has died in act of combat`;

    return response;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    let response = "";
    if (this.health > 0) {
      response = `A Saxon has received ${damage} points of damage`;
    } else {
      response = `A Saxon has died in combat`;
    }
    return response;
  }
}

//War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

vikingAttack(){
    let vikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
    let saxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
let vikingDude=this.vikingArmy[vikingIndex];
let saxonDude=this.saxonArmy[saxonIndex];

    saxonDude.receiveDamage(vikingDude.strength);

if (saxonDude.health<=0){
    this.saxonArmy.splice(saxonIndex,1);
}
return `A Saxon has received ${vikingDude.strength} points of damage`;
    
}
saxonAttack(){
    let vikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
    let saxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
let vikingDude=this.vikingArmy[vikingIndex];
let saxonDude=this.saxonArmy[saxonIndex];

    vikingDude.receiveDamage(saxonDude.strength);

if (vikingDude.health<=0){
    this.vikingArmy.splice(vikingIndex,1);
}
return `${vikingDude.name} has received ${saxonDude.strength} points of damage`;
}

showStatus(){
if (this.saxonArmy.length===0){
    return `Vikings have won the war of the century!`
}else if (this.vikingArmy.length===0){
    return `Saxons have fought for their lives and survive another day...`
} else if((this.saxonArmy) || (this.vikingArmy)){
    return `Vikings and Saxons are still in the thick of battle.`
}


}
}
