// Soldier
class Soldier {
    constructor (health, strength) {
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

constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
}
receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
            return `${this.name} has died in act of combat`
        }   
}
battleCry () {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
                return `A Saxon has died in combat`
            }   
    }
}

// War
class War {
    constructor () {
    this.saxonArmy = [];
    this.vikingArmy = [];
    }
    addViking(viking) {
      this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
        let victim = pickRandom(this.saxonArmy);
        let victimIndex = this.saxonArmy.indexOf(victim);
        let attacker = pickRandom(this.vikingArmy);
        console.log(victim);
        if ((victim.health - attacker.strength)<= 0) {
            let oldArmy = this.saxonArmy;
            this.saxonArmy = this.saxonArmy.slice(0,victimIndex).push;
            this.saxonArmy = oldArmy.slice(victimIndex+1);
        }
        return victim.receiveDamage(attacker.strength);
    };
    saxonAttack(){
        let victim = pickRandom(this.vikingArmy);
        let victimIndex = this.vikingArmy.indexOf(victim);
        let attacker = pickRandom(this.saxonArmy);
        console.log(victim);
        if ((victim.health - attacker.strength)<= 0) {
            let oldArmy = this.vikingArmy;
            this.vikingArmy = this.vikingArmy.slice(0,victimIndex).push;
            this.vikingArmy = oldArmy.slice(victimIndex+1);
        }
        return victim.receiveDamage(attacker.strength);
    };
    showStatus(){
//         if the Saxon array is empty, should return 
if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
}
else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survived another day..."
}
else if (this.vikingArmy && this.saxonArmy) {
return "Vikings and Saxons are still in the thick of battle.";
}
else {
    console.log("There must be some battle dust on the arrays..")
}
    };

}

function pickRandom (array) {
    let number = Math.floor(Math.random() * array.length);
    return array[number];
}