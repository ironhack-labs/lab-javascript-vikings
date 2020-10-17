// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return (this.strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage);

        if (health < 1 ) {
            this.alive = false;
        }
        else this.alive = true;

        if (alive) {
            return `${name} has received ${damage} points of damage`;
        }
        else {
            return `${name} has died in act of combat`;
        }
    }

    battleCry() {
       return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier {
   receiveDamage(damage) {
       super.receiveDamage(damage);

       if (health > 0) {
           return `A Saxon has received ${DAMAGE} points of damage`
       }
       else {
           return `A Saxon has died in combat`
       }


   }

}

// War
class War {}
