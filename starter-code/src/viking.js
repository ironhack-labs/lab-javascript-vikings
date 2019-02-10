// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };

  attack() {
    return this.strength;
  };

  receiveDamage(damage){
    this.health = this.health - damage;
  };

};

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health,strength);
    this.name = name;
  };

  receiveDamage(damage){
    this.health = this.health - damage;

    if(this.health<=0){
      return `${this.name} has died in act of combat`;
    }else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };

  battleCry() {
    return `Odin Owns You All!`
  };

};

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength);
  };

  receiveDamage(damage){
    this.health = this.health - damage;

    if(this.health<=0){
      return `A Saxon has died in combat`;
    }else {
      return `A Saxon has received ${damage} points of damage`;
    }
  };

};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  };

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  };

  vikingAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damageSaxon = randomSaxon.receiveDamage(randomViking.strength);

    if(randomSaxon.health <= 0){
      const i = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(i,1);
    };

    return damageSaxon;
  };

  saxonAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damageViking = randomViking.receiveDamage(randomSaxon.strength);

    if(randomViking.health <= 0){
      const i = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(i,1);
    };

    return damageViking;
  };

  showStatus(){
    if (this.vikingArmy == 0 ){
      return 'Saxons have fought for their lives and survive another day...';
    }else if(this.saxonArmy ==0){
      return 'Vikings have won the war of the century!';
    }else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  };

};