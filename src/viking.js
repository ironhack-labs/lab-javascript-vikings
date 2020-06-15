// Soldier
class Soldier {

    constructor(health,strength)
    {
        this.health = health
        this.strength = strength
    }

    attack = () =>
    {
        return this.strength
    }

    receiveDamage = (damage) =>
    {
        this.health -= damage
    }
    
}

// Viking
class Viking extends Soldier {
    
    constructor(name,health,strength)
    {
        super(health,strength)
        this.name = name   
    }

    receiveDamage = (damage) =>
    {
        this.health -= damage

        if(this.health != 0)
        {
            return `${this.name} has received ${damage} points of damage`
        }
        else
        {
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry = () =>
    {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier{
   
    receiveDamage = (damage) =>
    {
        this.health -= damage

        if(this.health != 0)
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

    constructor()
    {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking = (Viking) =>
    {
        this.vikingArmy.push(Viking)
    }

    addSaxon = (Saxon) =>
    {
        this.saxonArmy.push(Saxon)
        
    }

    vikingAttack = () =>
    {
        let viking = randomElement(this.vikingArmy)
        let saxon = randomElement(this.saxonArmy)

        saxon.receiveDamage(viking.attack())

        if(saxon.health <= 0)
        {
           this.saxonArmy.splice(this.saxonArmy[saxon],1)
           
           return 'A Saxon has died in combat' 
          
        }
          
          

    }

    saxonAttack = () =>
    {
        let viking = randomElement(this.vikingArmy)
        let saxon = randomElement(this.saxonArmy)

        viking.receiveDamage(saxon.attack())

        if(viking.health <= 0)
        {
           this.vikingArmy.splice(this.vikingArmy[viking],1)
           
        }
          return `${viking.name} has received ${saxon.strength} points of damage`
    }

    showStatus = () =>
    {
        if(this.saxonArmy.length == 0)
        {
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length == 0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }
        else 
            return "Vikings and Saxons are still in the thick of battle."
        }
    
}

function randomElement(array)
{
    return element = array[Math.floor(Math.random() * array.length)];
}

