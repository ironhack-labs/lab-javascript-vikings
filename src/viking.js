// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${dmg} points of damage`;
        }
    }
   
    battleCry() {
        return "Odin Owns You All!";
    }
   
}



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
      }
    
      receiveDamage(dmg) {
        this.health-=dmg;
        if(this.health <= 0){ return `A Saxon has died in combat`
    } else
    {return `A Saxon has received ${dmg} points of damage`}
      }
      
}

// War
class War {}
