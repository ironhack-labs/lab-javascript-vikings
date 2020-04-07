// Soldier
class Soldier {
    constructor(health, strength)
    {
        this.health = health;
        this.strength = strength;
    }
    attack()
    {
        return this.strength;
    }
    receiveDamage(damage)
    {
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier{
    constructor(name, health, strength)
    {
        super(health,strength);
        this.name = name;
    }
    battleCry()
    {
        return "Odin Owns You All!"
    }
    receiveDamage(damage)
    {
        this.health -= damage;
        if(this.health > 0)
        {
           return `${this.name} has received ${damage} points of damage`
        }
        else
        {
            return `${this.name} has died in act of combat` 
        }
    }
}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage)
    {
        this.health -= damage;
        if(this.health > 0)
        {
           return `A Saxon has received ${damage} points of damage`
        }
        else
        {
            return `A Saxon has died in combat` 
        }
    }
}

// War
class War {

    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking)
    {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon)
    {
        this.saxonArmy.push(Saxon)
    }
    
    vikingAttack()
    {
        return this.genericAttack(this.vikingArmy, this.saxonArmy)
        // let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        // let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        // let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        // if (this.saxonArmy[randomSaxon].health <= 0)
        // {
        //     this.saxonArmy.splice(randomSaxon,1)
        // }
        // return result
    }
    saxonAttack()
    {
        return this.genericAttack(this.saxonArmy, this.vikingArmy)
        // let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        // let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        // let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        // if (this.vikingArmy[randomViking].health <= 0)
        // {
        //     this.vikingArmy.splice(randomViking,1)
        // }
        // return result
    }
    genericAttack(attacker, defender)
    {
        let randomAttacker = Math.floor(Math.random()*attacker.length)
        let randomDefender = Math.floor(Math.random()*defender.length)
        let result = defender[randomDefender].receiveDamage(attacker[randomAttacker].strength)
        if (defender[randomDefender].health <= 0)
        {
            defender.splice(randomDefender,1)
        }
        return result
    }
    

    showStatus()
    {
        if (this.saxonArmy.length === 0)
        {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }
        else
        {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
