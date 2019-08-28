// Solider 
class Soldier {
  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(nameArg, healthArg, strengthArg){
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    const message = this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    return message;
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon {
  
}

// War
class War {}
