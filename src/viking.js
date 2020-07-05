// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= 50;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength), (this.name = name);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
    return result;
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage){
    this.health-=damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health === 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    let ranVik= Math.floor(Math.random()* (this.vikingArmy.length));
    let ranSax= Math.floor(Math.random()* (this.saxonArmy.length));

    let saxon = this.saxonArmy[ranSax];
    let viking = this.vikingArmy[ranVik];

    saxon.receiveDamage(viking.strength);
    let result = '';

    if(saxon.health <= 0) {
      this.saxonArmy.splice(ranSax,1)
      result ='A Saxon has died in combat'
    }
    
    return result
  }

  saxonAttack(){
    let ranVik= Math.floor(Math.random()* (this.vikingArmy.length));
    let ranSax= Math.floor(Math.random()* (this.saxonArmy.length));

    let saxon = this.saxonArmy[ranSax];
    let viking = this.vikingArmy[ranVik];

    viking.receiveDamage(saxon.strength)
    let result = ``;

    if(viking.health <= 0) {
      result = `A viking has gone to Valhalla`
      this.vikingArmy.splice(ranVik,1)
    }
    result = `${viking.name} has received ${saxon.strength} points of damage`

    return result
  }
  showStatus(){
    if(this.saxonArmy.length===0){
      return 'Vikings have won the war of the century!'
    } else if( this.vikingArmy.length===0){
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }
}
