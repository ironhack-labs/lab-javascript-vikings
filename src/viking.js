// 🧱 Base Soldier class: shared by both Vikings and Saxons
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    // Attack simply returns the strength value
    attack() {
        return this.strength;
    }

    // Subtracts health when damage is received
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// ⚔️ Viking class inherits from Soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); // Inherit health and strength
        this.name = name;        // Add unique property: name
    }

    // Override damage method with custom Viking message
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0
            ? `${this.name} has received ${damage} points of damage`
            : `${this.name} has died in act of combat`;
    }

    // Viking-only method
    battleCry() {
        return "Odin Owns You All!";
    }
}

// 🪓 Saxon class also inherits from Soldier
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength); // Reuse Soldier's constructor
    }

    // Override damage method with Saxon-specific message
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
    }
}

// 🧠 War class: manages the armies and the battle logic
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    // One random Viking attacks a random Saxon
    vikingAttack() {
        const viking = this.getRandom(this.vikingArmy);
        const saxonIndex = this.getRandomIndex(this.saxonArmy);
        const saxon = this.saxonArmy[saxonIndex];

        const result = saxon.receiveDamage(viking.attack());

        // Remove dead Saxon
        if (saxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1);

        return result;
    }

    // One random Saxon attacks a random Viking
    saxonAttack() {
        const saxon = this.getRandom(this.saxonArmy);
        const vikingIndex = this.getRandomIndex(this.vikingArmy);
        const viking = this.vikingArmy[vikingIndex];

        const result = viking.receiveDamage(saxon.attack());

        // Remove dead Viking
        if (viking.health <= 0) this.vikingArmy.splice(vikingIndex, 1);

        return result;
    }

    // Check who is winning
    showStatus() {
        if (this.saxonArmy.length === 0) return "✅ Vikings have won the war!";
        if (this.vikingArmy.length === 0) return "💀 Saxons have survived!";
        return "⚔️ The battle rages on...";
    }

    // Helper: get random item from array
    getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Helper: get random index
    getRandomIndex(arr) {
        return Math.floor(Math.random() * arr.length);
    }
}

// 🔥 Let's simulate a battle
const war = new War();

// Add 3 Vikings
war.addViking(new Viking("Ragnar", 100, 25));
war.addViking(new Viking("Lagertha", 90, 30));
war.addViking(new Viking("Bjorn", 110, 20));

// Add 5 Saxons
for (let i = 0; i < 5; i++) {
    war.addSaxon(new Saxon(60, 15));
}

// Run the battle
let round = 1;
while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0) {
    console.log(`\n🔥 ROUND ${round}`);
    console.log("Viking attack:", war.vikingAttack());

    if (war.saxonArmy.length > 0) {
        console.log("Saxon attack:", war.saxonAttack());
    }

    console.log(war.showStatus());
    round++;
}
