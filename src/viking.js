// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health-damage
    }
    }

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name}

        attack(){
            return this.strength
        }

        receiveDamage(damage){
            this.health = this.health-damage;
            if (this.health >= damage ){
                return this.name + ' has received ' + damage+' points of damage'
            }
            else if(this.health < damage){
                return this.name +' has died in act of combat'
            }
        }
        battleCry(){
            return 'Odin Owns You All!'
        }
    }


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
    this.health = this.health-damage;
    if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    }
    else if(this.health <= 0){
        return 'A Saxon has died in combat'
    }
}
}

// War
class War {
    constructor(){
    this.vikingArmy= []
    this.saxonArmy=[]
}
addViking(viking){
    this.vikingArmy.push(viking)
}
addSaxon(saxon){
    this.saxonArmy.push(saxon)
}
vikingAttack(){
    let vikingwarrior = this.vikingArmy[math.floor(Math.random()*this.vikingArmy.length)]
    let saxonwarrior = this.saxonArmy[math.floor(Math.random()*this.saxonArmy.length)]
    saxonwarrior.receiveDamage(vikingwarrior.strength)
}
saxonAttack(){

}
}
