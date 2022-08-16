// Soldier
class Soldier {
    constructor (healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
            
    }
    attack (){
        return this.strength;
    }

    receiveDamage (damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (First, Second, Third){
        super (Second, Third);
        this. name = First;
    }
        rceiveDamage (damage){
            super.receiveDamage (damage);
            if (this.health > 0) 
            {return `${this.name}  has received ${damage} points`
        } else {
            return `${this.name} has died in act of comabte`
        }
}
battleCry (){
    return "Odin Owns You All!"
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage){
        super.receiveDamage (damage)
        if (this.health > 0) {
            return `A saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in act of comabte`
        }
    }
}

// War
class War {}
