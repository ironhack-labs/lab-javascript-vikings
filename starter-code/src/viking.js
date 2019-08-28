// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health= healthArg;
        this.strength= strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        (this.health -= damage)
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg)
        this.name= nameArg;
    }
    receiveDamage(damage){
        this.health-= damage
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        if(this.health<=0){
            return `${this.name} has died in act of combat`

        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg){
        super(healthArg, strengthArg)
    }
    receiveDamage(damage){
        this.health-= damage
        if(this.health>0){
           return `A Saxon has received ${damage} points of damage`
        }
        if(this.health<=0){
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
        constructor(){
            this.vikingArmy= []
            this.saxonArmy= []
        }
        addViking(Viking){
            this.vikingArmy.push(Viking)
        }
        addSaxon(Saxon){
            this.saxonArmy.push(Saxon)
        }
        vikingAttack(){
          let saxonPick=   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength)
            this.saxonArmy.pop(saxonPick)
            return saxonPick
        }
         saxonAttack(){
             let random = Math.floor(Math.random() * this.vikingArmy.length)
             let vikingPick= this.vikingArmy[random].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
             if(this.vikingArmy[random].health <= 0){
             this.vikingArmy.splice(random, 1)
             }
             return vikingPick
         }
         showStatus(){
             if (this.saxonArmy.length === 0){
                 return "Vikings have won the war of the century!"
             }
             if(this.vikingArmy.length ===0){
                 return "Saxons have fought for their lives and survive another day...";
             }
             if(this.vikingArmy.length!== 0 && this.saxonArmy.length!== 0){
                 return "Vikings and Saxons are still in the thick of battle."
             }
         }
 }

