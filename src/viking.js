// Soldier
class Soldier 
{
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
class Viking extends Soldier
{
    constructor(name, health, strength)
    {
        super(health, strength);

        this.name = name;
    }

    receiveDamage(damage)
    {
        super.receiveDamage(damage);

        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry()
    {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier
{
    receiveDamage(damage)
    {
        super.receiveDamage(damage);

        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War 
{
    vikingArmy = [];
    saxonArmy = [];

    randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    viking = this.vikingArmy[this.randomViking]; 
    saxon = this.saxonArmy[this.randomSaxon];

    addViking(viking)
    {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon)
    {
        this.saxonArmy.push(saxon);
    }


    vikingAttack()
    {
        // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        // let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        // let viking = this.vikingArmy[randomViking]; 
        // let saxon = this.saxonArmy[randomSaxon];
        let result = this.saxon.receiveDamage(this.viking.strength);

        for(let i of this.saxonArmy)
        {
            if(i.health <= 0)
            {
                this.saxonArmy.splice(i, 1)
            }
        }

        return result
    }

    saxonAttack()
    {
        // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        // let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        // let viking = this.vikingArmy[randomViking]; 
        // let saxon = this.saxonArmy[randomSaxon];
        let result = this.viking.receiveDamage(this.saxon.strength);

        for(let i of this.vikingArmy)
        {
            if(i.health <= 0)
            {
                this.vikingArmy.splice(i, 1)
            }
        }

        return result
    }

    showStatus()
    {
        if(this.saxonArmy.length == 0)
        {
            return "Vikings have won the war of the century!"
        }

        if(this.vikingArmy.length == 0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }

        if(this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1)
        {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


class Block
{
    constructor(array){
        this.array = array;
    }

    getWidth()
    {
        let width = this.array[0];

        return width;
    }

    getLength()
    {
        let length = this.array[1];

        return length;
    }

    getHeight()
    {
        let height = this.array[2];

        return height;
    }

    getVolume()
    {
        return this.getWidth() * this.getLength() * this.getHeight();
    }

    getSurfaceArea()
    {
        return (2 * this.getLength() * this.getWidth()) + (2 * this.getLength() * this.getHeight()) + (2 * this.getWidth() * this.getHeight()) 
    }
}

let block = new Block([2, 4, 6]);

console.log(block.getSurfaceArea())