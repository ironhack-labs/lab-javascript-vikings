// Soldier
class Soldier {
    constructor(health, strength) {
        this.attack = function returnStrength() {
            return strength};
        this.receiveDamage = function hurt(damage) {
                if (damage < 1) {
                    health === (health - damage);
                };
            }
        }
    }

// Viking
class Viking extends Soldier(health, strength) {
    constructor(name, health, strength) {
        super(name, health, strength);
        this.receiveDamage = function hurtV(damage) {
            if (damage < 1) {
                health === (health - damage);
            }
            if (health > 0) {
                return `${NAME} has received ${DAMAGE} points of damage`
            }
            if (health <= 0) {
                return `${NAME} has died in act of combat`
            }
        this.battleCry = function cries() {
            return "Odin Owns You All!";
        }
      }  
    }}

// // Saxon
// class Saxon {}

// // War
// class War {}
