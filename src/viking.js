
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health ;
    this.strength = strength;
  }
  attack(){
    return(this.strength);
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(n, h, s) {
    super(h, s)
    this.name = n
  };

  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in act of combat`
    }
    }

    battleCry(){
      return 'Odin Owns You All!';
    }
  };


new Viking('Bob', 10, 4)

// Saxon
class Saxon {}

// War
class War {}
