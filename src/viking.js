// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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
  //constructor(name, health, strength) {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
  
   this.health -= damage
   let msg1 = `${this.name} has died in act of combat`;
   let msg2 = `${this.name} has received ${damage} points of damage`;
   if (this.health <= 0) {
       return msg1
    } else {
        return msg2
   } 
   // if Viking.health > 0 {
    //     return "NAME has received DAMAGE points of damage"
    // }  else {
    //     return "NAME has died in act of combat"
    // }

    // let life = health > 0;
    // for (let i = 0; i < this.health.length; i--) {
    //     if (life > 0) {
           
        }
        battleCry() {
            return "Odin Owns You All!"
        }
        
    }


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
         } else {
             return `A Saxon has received ${damage} points of damage`;
        } 
}}

//War
class War {}
