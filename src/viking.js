// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(dmg){
        this.health-=dmg;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(dmg){
        this.health-=dmg;
        if (this.health-dmg<0){
            return `${this.name} has died in act of combat`;
        }else{
            return `${this.name} has received ${dmg} points of damage`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon extends Soldier{
    receiveDamage(dmg){
        this.health-=dmg;
        if (this.health<=0){
            return `A Saxon has died in combat`;
        }else{
            return `A Saxon has received ${dmg} points of damage`;
        }
    }
}

// War
class War {
        constructor(){
            this.vikingArmy = [];
            this.saxonArmy = [];
        }
    addViking(viking){
        this.vikingArmy.push(viking);
        // this.vikingArmy +{vicking.name,vicking.strength,vicking.health;
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let rndIndSaxon = Math.floor(Math.random() *this.saxonArmy.length);
        let rndIndVik = Math.floor(Math.random() *this.vikingArmy.length);
        let result = this.saxonArmy[rndIndSaxon].receiveDamage(this.vikingArmy[rndIndVik].strength);
        if (this.saxonArmy[rndIndSaxon].health<=0){this.saxonArmy.splice(rndIndSaxon,1);}
        return result;
    }
    saxonAttack(){
        let rndIndSaxon = Math.floor(Math.random() *this.saxonArmy.length);
        let rndIndVik = Math.floor(Math.random() *this.vikingArmy.length);
        let result = this.vikingArmy[rndIndVik].receiveDamage(this.saxonArmy[rndIndSaxon].strength);
        if (this.vikingArmy[rndIndVik].health<=0){this.vikingArmy.splice(rndIndVik,1);}
        return result;
    }
    generalAttack(attacker,damaged){
        let rndAttacker = Math.floor(Math.random() *this.attacker.length);
        let rndDamaged = Math.floor(Math.random() *this.damaged.length);
        let result = this.attacker[rndAttacker].receiveDamage(this.damaged[rndDamaged].strength);
        if (this.damaged[rndDamaged].health<=0){this.damaged.splice(rndDamaged,1);}
        return result;
    }
    showStatus(){
        if (this.vikingArmy.length===0) { return "Saxons have fought for their lives and survived another day...";}
        if (this.saxonArmy.length===0) { return "Vikings have won the war of the century!";}
        if(this.saxonArmy.length===1 && this.vikingArmy.length===1){ return "Vikings and Saxons are still in the thick of battle.";}

    }

}
