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

    addViking(viking)
    {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon)
    {
        this.saxonArmy.push(saxon);
    }


    selectSoldier(type)
    {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[randomViking]; 
        let saxon = this.saxonArmy[randomSaxon];

        let vikingHit = saxon.receiveDamage(viking.strength);
        let saxonHit = viking.receiveDamage(saxon.strength);

        if(type == "viking")
        {
            for(let i of this.saxonArmy)
            {
                console.log(i.health)
                if(i.health <= 0)
                {
                    this.saxonArmy.splice(i, 1)
                }
            }

           return vikingHit
        }

        if(type == "saxon")
        {
            for(let i of this.vikingArmy)
            {
                if(i.health <= 0)
                {
                    this.vikingArmy.splice(i, 1)
                }
            }

            return saxonHit
        }
    }


    vikingAttack()
    {
        return this.selectSoldier("viking")
    }

    saxonAttack()
    {
        return this.selectSoldier("saxon")
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