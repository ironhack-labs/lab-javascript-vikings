// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(aDamage){
        this.health -= aDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(aDamage) {
        this.health -= aDamage;
        if (this.health <= 0){
            return (`${this.name} has died in act of combat`);
        } else {
            return (`${this.name} has received ${aDamage} points of damage`)
        };
    }
    battleCry(){
        return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(aDamage){
        this.health -= aDamage;
        if (this.health <= 0){
            return (`A Saxon has died in combat`);
        } else {
            return (`A Saxon has received ${aDamage} points of damage`)
        };
        
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(aViking){
        this.vikingArmy.push(aViking);
    }
    addSaxon(aSaxon){
        this.saxonArmy.push(aSaxon);
    }
    vikingAttack(){
        let sx = Math.floor(Math.random()*this.saxonArmy.length);
        let vx = Math.floor(Math.random()*this.vikingArmy.length);
        let damage = this.vikingArmy[vx].strength;
        let result = this.saxonArmy[sx].receiveDamage(damage);
        if (this.saxonArmy[sx].health <= 0) {
            this.saxonArmy.splice(sx,1);
        };
        return result;
    }
    saxonAttack(){
        let sx = Math.floor(Math.random()*this.saxonArmy.length);
        let vx = Math.floor(Math.random()*this.vikingArmy.length);
        let damage = this.saxonArmy[sx].strength;
        let result = this.vikingArmy[vx].receiveDamage(damage);
        if (this.vikingArmy[vx].health <= 0) {
            this.vikingArmy.splice(vx,1);
        };
        return result;
    }
    // attack (aSoldier){
    //     switch aSoldier {
    //         case "viking":
    //             attackingAarmy = this.vikingArmy;
    //             deffendingArmy = this.saxonArmy;
    //             break;
    //         case "saxon":
    //             attackingArmy = this.saxonArmy;
    //             deffendingArmy = this.vikingArmy;
    //             break;
    //         default:
    //             return (`${aSoldier} is not part of this war!`);
    //     } 
    //     let ax = Math.floor(Math.random()*attackingAarmy.length);
    //     let dx = Math.floor(Math.random()*deffendingArmy.length);
    //     let damage = attackingAarmy[ax].strength;
    //     let result = deffendingArmy[dx].receiveDamage(damage);
    //     if (deffendingArmy[dx].health <= 0) {
    //         deffendingArmy.splice(dx,1);
    //     };
    //     return result;
    // }

    showStatus(){
        if (this.vikingArmy.length != 0 && this.saxonArmy.length != 0) {
            return ("Vikings and Saxons are still in the thick of battle.")
        } else if (this.saxonArmy.length == 0) {
            return ("Vikings have won the war of the century!");
        } else {
            return ("Saxons have fought for their lives and survived another day...");
        }

    }
}
