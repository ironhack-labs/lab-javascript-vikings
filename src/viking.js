// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }
    attack(){
        super.attack();
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if(this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        } else{ 
            return `${this.name} has died in act of combat`
        };
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        super.attack();
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage
        this.health -= this.damage
        if(this.health > 0){
            return `A Saxon has received ${this.damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
        }   
}

// War
class War {
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []
    }

     addViking(viking){
        this.vikingArmy.push(viking)
      }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]
        const damage = viking.strength
        const result = saxon.receiveDamage(damage)

        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxon, 1)
        }

        return result

    }
    saxonAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon = this.saxonArmy[randomSaxon];
        const viking = this.vikingArmy[randomViking];
        const damage = saxon.strength;
        const result = viking.receiveDamage(damage);

        if (viking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
        }

        return result;
    }
    // showStatus(){}
}
