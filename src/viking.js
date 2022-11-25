// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
    receiveDamage(damage){    
        this.health = this.health - damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){        
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    vikingArmy =[];
   saxonArmy =[];

     
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
    const randomSaxonIndex = Math.floor( Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor( Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    const message = randomSaxon.receiveDamage(randomViking.attack());
    
    if(randomSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonIndex, 1); 
    }
     return message;
    }
    saxonAttack(){
    const randomSaxonIndex = Math.floor( Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor( Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    const message = randomViking.receiveDamage(randomSaxon.attack());
    if(randomViking.health <= 0){
        this.vikingArmy.splice(randomVikingIndex, 1); 
    }
    return message;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return  "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
    /// A generic method to avoid using two methods almost similar to each other
    /// Send the viking and saxon arrays as arguments, depending on the order of the arguments
    /// either vikings or saxons will attack and the other receives damage.
    
   goToWar(attacker,defender){
    const attackerIndex = Math.floor( Math.random() * this.attacker.length);
    const defenderIndex = Math.floor( Math.random() * this.defender.length);
    const attackingSoldier = this.attacker[attackerIndex];
    const defendingSoldier = this.defender[defenderIndex];
    const message = defendingSoldier.receiveDamage(attackingSoldier.attack());
    if(defendingSoldier.health <= 0){
        this.defender.splice(defenderIndex, 1); 
    }
    return message;
   }

}
