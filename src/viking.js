// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(damage) {
        this.health =this.health - damage;
    }
    }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super(health,strength);
    this.name = name;
};
    battleCry(){
        return "Odin Owns You All!"
    };
    receiveDamage(damage){
        this.health =this.health - damage;
        if(this.health <=0){
            return `${this.name} has died in act of combat`;
        } else{
            return `${this.name} has received ${damage} points of damage`;
        }
    };
}

        /* should return "NAME has received DAMAGE points of damage", if the Viking is still alive
should return "NAME has died in act of combat", if the Viking dies */

// Saxon
class Saxon  extends Soldier{
    constructor(health, strength) {
        super(health,strength);     
};
receiveDamage(damage){
    this.health =this.health - damage;
    if(this.health <=0){
        return "A Saxon has died in combat";
    } else{
        return `A Saxon has received ${damage} points of damage`;
    }
};
}
// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
};
addViking(viking){
    this.vikingArmy.push(viking);
};
addSaxon(saxon){
    this.saxonArmy.push(saxon);
};
vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random())];
    let randomViking = this.vikingArmy[Math.floor(Math.random())];
    randomSaxon.receiveDamage(randomViking.attack());
    if(randomSaxon.health <= 0){
         this.saxonArmy.splice(randomSaxon,1);
 return "A Saxon has died in combat"
    }else {
        return `A Saxon has received ${randomViking.strength} points of damage`;

}
}
saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random())];
    let randomViking = this.vikingArmy[Math.floor(Math.random())];
    randomViking.receiveDamage(randomSaxon.attack());
    if(randomViking.health <= 0){
         this.vikingArmy.splice(randomViking,1);
         return `${randomViking.name} has died in act of combat`;
        }else {
            return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    
};
};
showStatus(){
    if(this.saxonArmy.length === 0 && this.vikingArmy.length >0) {
        return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length === 0 && this.saxonArmy.length >0){
       return "Saxons have fought for their lives and survived another day..."
    }else if(this.vikingArmy.length >0 && this.saxonArmy.length > 0)
        return "Vikings and Saxons are still in the thick of battle."
    }
}
/*should return "Vikings have won the war of the century!", if the Saxons array is empty
should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons */
