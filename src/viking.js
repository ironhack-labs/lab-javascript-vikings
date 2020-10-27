
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
            this.health = this.health - damage;
        } 
}

// Viking 
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
            battleCry() {
                return 'i am flying'
            }

}

// Saxon
class Saxon {}

// War
class War {}
 