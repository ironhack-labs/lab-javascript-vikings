// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
     attack() {
       return this.strength
    }

    receiveDamage(damage){
      this.health -= damage;
        return;
    }
}



//Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        

        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
        
    }

    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return "A Saxon has died in combat"
    }
}

// War
class War {}
