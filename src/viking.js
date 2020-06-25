// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
        }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name;
        }

    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0){ // is Vicking has still health points left
            return `${this.name} has received ${this.damage} points of damage`;
        }  return `${this.name} has died in act of combat`; // dead Vicking
    }

    battleCry(){
    return 'Odin Owns You All!'
        }
}

// Saxon
class Saxon extends Soldier {
        receiveDamage(damage){
            this.damage = damage;
            this.health = this.health - this.damage;
            if (this.health > 0){ // if Saxon has still health points left
                return `A Saxon has received ${this.damage} points of damage`;
            }  return `A Saxon has died in combat`; // dead Saxon
        }
}

// War
class War {
    constructor (){ //create armies 
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    addViking(Viking){
        this.Viking = Viking;
        this.vikingArmy.push(Viking); //add Vicking to army
    }
    addSaxon(Saxon){
        this.Saxon = Saxon;
        this.saxonArmy.push(Saxon); //add Saxon to army

    }
    vikingAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]  //pick random Vicking from VickingArmy
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)] //pick random Saxon from SaxonArmy
        const damageInflicted = randomSaxon.receiveDamage(randomViking.strength)  //define damage
        
        if(randomSaxon.health <= 0){ // if Sanxon dies
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1) //remove Saxon from Army

        }
        return damageInflicted
    }

    saxonAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)] //pick random Vicking from VickingArmy
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)] //pick random Saxon from SaxonArmy
        const damageInflicted = randomViking.receiveDamage(randomSaxon.strength)
        
        if(randomViking.health <= 0){ // if Vicking dies
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1) //remove Vicking from Army

        }
        return damageInflicted
    }


    showStatus(){
        if (!this.saxonArmy.length){
            return `Vikings have won the war of the century!`
        } else if (!this.vikingArmy.length){
            return `Saxons have fought for their lives and survived another day...`
        }else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}




//TESTS ==> uncomment to test
const vik1 = new Viking ('Jonny', 5, 5, 4);
const vik2 = new Viking ('Jack', 5, 2, 1);
const vik3 = new Viking ('Jason', 7, 5, 8);
const sax1 = new Saxon (6, 5, 8);
const sax2 = new Saxon (3, 8, 4);
const sax3 = new Saxon (3, 5, 2);
const newWar = new War();
newWar.addViking(vik1);
newWar.addViking(vik2);
newWar.addViking(vik3);
newWar.addSaxon(sax1);
newWar.addSaxon(sax2);
newWar.addSaxon(sax3);
console.log(newWar)
newWar.vikingAttack();
newWar.saxonAttack();
newWar.showStatus()


