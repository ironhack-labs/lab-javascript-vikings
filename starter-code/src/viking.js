// Soldier
class Soldier { 
    constructor(healthArg, strengthArg) {
        this.health = healthArg
        this.strength = strengthArg
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
        }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg)
        this.name = nameArg
    }

    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return nameArg `has received ${damage} points of damage`
        }else{
            return nameArg `has died in act of combat`
        }  
    }  
    
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg){
        super (healthArg,strengthArg)
    }

    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }   
    }
}

// War
class War{
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking (Viking){
            this.vikingArmy.push(Viking)
        }

    addSaxon (Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack (){
        let saxonChoosen = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingChoosen = Math.floor(Math.random() * this.vikingArmy.length);

        this.saxonArmy[saxonChoosen].receiveDamage(this.vikingArmy[vikingChoosen].strength)

        if (this.saxonArmy[saxonChoosen].health <= 0) {
            this.saxonArmy.pop(saxonChoosen) 
            return "A Saxon has died in combat";   
        }

    }
        

    saxonAttack (){
        let vikingChoosen = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonChoosen = Math.floor(Math.random() * this.saxonArmy.length);
       
        this.vikingArmy[vikingChoosen].receiveDamage(this.saxonArmy[saxonChoosen].strength)

        if (this.vikingArmy[vikingChoosen].health <= 0) {
            this.vikingArmy.pop(vikingChoosen) 
            return "A Viking has died in combat";   
        }

    }

    showStatus (){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"

        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."

        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

