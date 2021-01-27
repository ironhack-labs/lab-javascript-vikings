// Soldier
class Soldier {
    constructor(health, strength) {
        

        this.health = health;
        this.strength = strength;

        
    }

    attack (){
        return this.strength
    }
    
    receiveDamage (theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage (damage){
        this.health = this.health - damage;
        if(this.health > 0){
          return  `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`}
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){

        this.health = this.health - damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`
        }
    }    

    }


    // War

function getRandInteger(max){
    return Math.floor(Math.random() * Math.floor(max));
}
    class War {
    vikingArmy = []
    saxonArmy = []

        addViking(barbarian){
            this.vikingArmy.push(barbarian)
        }

        addSaxon(frank){
            this.saxonArmy.push(frank)
        }

    

        vikingAttack(){
            let soldierAttacking = getRandInteger(this.vikingArmy.length)
            console.log(soldierAttacking)
            let soldierDef = getRandInteger(this.saxonArmy.length)
            console.log(soldierDef)

            console.log(
            this.saxonArmy[soldierDef].receiveDamage(this.vikingArmy[soldierAttacking].strength)

            )

            if(this.saxonArmy[soldierDef].health <= 0)
            {
                this.saxonArmy.splice(soldierDef,1);
                return 'A Saxon has died in combat'
            }else{
                return `A Saxon has received ${this.vikingArmy[soldierAttacking].strength} points of damage`;
            }
        }

        saxonAttack(){
            let soldierAttacking = getRandInteger(this.saxonArmy.length)
            let soldierDef = getRandInteger(this.vikingArmy.length)

            this.vikingArmy[soldierDef].receiveDamage(this.saxonArmy[soldierAttacking].strength)
            
            if(this.vikingArmy[soldierDef].health <= 0)
            {
                this.vikingArmy.splice(soldierDef,1);
                return 'A Saxon has died in combat'
            }else{
                return `${this.vikingArmy[soldierDef].name} has received ${this.saxonArmy[soldierAttacking].strength} points of damage`;
            }

        }



        showStatus(){

        }


}