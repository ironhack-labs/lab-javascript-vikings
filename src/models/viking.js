
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        /* this.health -= damage
        const life = this.health */
        super.receiveDamage(damage) //reutilizamos el metodo de la clase padre
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

const fromen = new Viking("Fromen", 50, 50);