// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }

    attack() {
        console.log(`${this.strength}`);
    }
    receiveDamage(damage){
        this.health -= damage;
    };
    return
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        console.log(`${this.strength}`);
    }
    receiveDamage(damage){
        this.health -= damage;
            if(this.health > 0){
                console.log(`${name} has received ${damage} points of damage`)
             } else {
                console.log(`${name} has died in act of combat`)
             };

    battleCry()
        console.log("Odin Owns You All!")
    };
    return
}

// Saxon
class Saxon {}

// War
class War {}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
