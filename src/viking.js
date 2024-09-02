// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return (this.strength)
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`);
        }
        else{
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return ("Odin Owns You All!")
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`A Saxon has received ${damage} points of damage`);
        }
        else{
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        const vikingo = Math.floor(Math.random() * this.vikingArmy.length)
        const saxon = Math.floor(Math.random() * this.saxonArmy.length)
        // console.log(vikingo, saxon);
        let mensaje = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[vikingo].attack());
        if (this.saxonArmy[saxon].health <= 0){
            this.saxonArmy.splice(saxon, 1);
        }
        return (mensaje)
    }
    saxonAttack(){
        const vikingo = Math.floor(Math.random() * this.vikingArmy.length)
        const saxon = Math.floor(Math.random() * this.saxonArmy.length)
        let mensaje = this.vikingArmy[vikingo].receiveDamage(this.saxonArmy[saxon].attack());
        if (this.vikingArmy[vikingo].health <= 0){
            this.vikingArmy.splice(vikingo, 1);
        }
        return (mensaje)
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return ("Vikings have won the war of the century!")
        }
        else if (this.vikingArmy.length === 0){
            return ("Saxons have fought for their lives and survived another day...")
        }
        else{
            return ("Vikings and Saxons are still in the thick of battle.")
        }
    }
}

let guerra = new War();
let vikingo1 = new Viking("Haland", 10, 10);
let vikingo2 = new Viking("Roland", 20, 11);
let vikingo3 = new Viking("Asgard", 23, 9);
let vikingo4 = new Viking("Loki", 15, 4);
let vikingo5 = new Viking("Toro", 19, 15);
guerra.addViking(vikingo1)
guerra.addViking(vikingo2)
guerra.addViking(vikingo3)
guerra.addViking(vikingo4)
guerra.addViking(vikingo5)
let saxon1 = new Saxon(10, 8);
let saxon2 = new Saxon(8, 10);
let saxon3 = new Saxon(7, 13);
let saxon4 = new Saxon(13, 7);
let saxon5 = new Saxon(20, 20);
guerra.addSaxon(saxon1)
guerra.addSaxon(saxon2)
guerra.addSaxon(saxon3)
guerra.addSaxon(saxon4)
guerra.addSaxon(saxon5)

let i = 0;
while (true)
{
    console.log(guerra.vikingAttack());
    if (guerra.saxonArmy.length === 0 || guerra.vikingArmy.length === 0){
        break;
    }
    console.log(guerra.saxonAttack());
    if (guerra.saxonArmy.length === 0 || guerra.vikingArmy.length === 0){
        break;
    }
    i++;
    if (i % 5 === 0){
        console.log(guerra.showStatus())
    }
}
console.log(guerra.showStatus());