// Soldier
class Soldier 
{
  constructor (health, strength)
  {
    this.health = health;
    this.strength = strength;
  }

  attack ()
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
  constructor (name, health, strength)
  {
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage)
  {
    super.receiveDamage(damage);

    if(this.health <= 0) {return `${this.name} has died in act of combat`}
    
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry()
  {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier
{
  constructor (health, strength)
  {
    super (health, strength);
  }

  receiveDamage(damage)
  {
    super.receiveDamage(damage);

    if(this.health <= 0) {return `A Saxon has died in combat`}
    
    return `A Saxon has received ${damage} points of damage`
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
    this.saxonArmy.push(Saxon);
  }

  vikingAttack()
  {
    let attack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {this.saxonArmy.splice(0, 1)}
    return attack;
  }

  saxonAttack()
  {
    let attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {this.vikingArmy.splice(0, 1)}
    return attack;
  }

  showStatus()
  {
    if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
