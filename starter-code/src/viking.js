// Soldier
function Soldier(healthArg, strengthArg)
{
    //Soldier's health and strength
    this.health = healthArg;
    this.strength = strengthArg;

    //Soldier's strength
    Soldier.prototype.attack = function()
    {
        return this.strength;
    }

    //Takes away from Soldier's health
    Soldier.prototype.receiveDamage = function(damage)
    {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier
{
    constructor(name, health, strength)
    {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage)
    {
        this.health -= damage;
        if(this.health > 0)
        {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry()
    {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier
{
    constructor(health, strength)
    {
        super(health, strength)
    }

    receiveDamage(damage)
    {
        this.health -= damage;
        if(this.health > 0)
        {
            return `A Saxon has received ${damage} points of damage`;
        }
        return "A Saxon has died in combat"
    }
}

// War
class War
{
    constructor()
    {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking)
    {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon)
    {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack()
    {
        randomSaxon = saxonArmy[Math.floor(Math.random * saxonArmy.length)]
    }

    saxonAttack()
    {

    }

    showStatus()
    {

    }
}
