// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        /*return*/ this.health -= damage
    }
}

// let soldier1 = new Soldier(300, 150);
// console.log(soldier1.attack());
// console.log(soldier1.receiveDamage(30));


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        super.attack();
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength;
    }
// Comment: I did not find the way to "super" the attach method without re-implementing the constructor. This is why I just re-implemented the full attack method.

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(randomViking){
        this.vikingArmy.push(randomViking);
    };

    addSaxon(randomSaxon){
        this.saxonArmy.push(randomSaxon)

    };

    vikingAttack(){

        randomSaxon.receiveDamage(randomViking.strength) ;  

        // did not get this one. I don't understand how to link tje War class with the warrior classes without using extends. In other words, how can I use receiveDamage and strengh in war without introducing them with extends and constructor?
    }



    saxonAttack(){

    }

    showStatus(){

    }

}
