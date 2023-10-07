// Soldier
/*Toca crear un soldado con */
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }
    attack() {
        return this.strength;
    }
    receiveDamage(strength) {
        this.health -= strength
    }

}


class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(strength) {

        //debe eliminar el daño recibido de la propiedad de salud (ejercicio)
        //debería devolver "NOMBRE ha recibido DAÑO puntos de daño", si el vikingo todavía está vivo
        //debería devolver "NOMBRE ha muerto en acto de combate", si el vikingo muere

        this.health -= strength
        if (this.health > 0) {
            return `${this.name} has received ${strength} points of damage`; // if the Viking is still alive
        }
        else {

            return `${this.name} has died in act of combat`; //if the Viking dies`;
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
    receiveDamage(strength) {
        this.health -= strength
        //should return `"A Saxon has received ${strength} points of damage", if the Saxon is still alive`
        if (this.health > 0) {
            return `A Saxon has received ${strength} points of damage`; //if the Saxon is still alive
        }
        else {
            return `A Saxon has died in combat`;
            //should return "A Saxon has died in combat", if the Saxon dies
        }

    }

}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
        this.vikingArmy.push(viking);

    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let saxon1 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking1 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = saxon1.receiveDamage(viking1.strength);

        if (saxon1.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon1), 1);
        }

        return damage;
    }
    //should be a declared
    //should receive 0 arguments
    saxonAttack() {
        let saxon1 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking1 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        //should make a Viking receiveDamage() equal to the strength of a Saxon
        let damage = viking1.receiveDamage(saxon1.strength);
        //should remove dead vikings from the army
        if (viking1.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking1), 1);
        }
        //should return result of calling receiveDamage() of a Viking with the strength of a Saxon
        return damage;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
            //should return "Vikings have won the war of the century!", if the Saxons array is empty
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
            //should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
            //should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
        }
    }
}
