// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    /* Si quisieramos concatenar arrays => ej: vikings = [{},{}]
    
    addVikings(vikings) {
        this.vikingArmy.concat(vikings);            => .oncat junta varios arrays y devuelve un solo []
    }*/

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    atack (mode){
        const saxonRandom = randomElement(this.saxonArmy)
        const vikingRandom = randomElement(this.vikingArmy)

        let atackResult;
        switch(mode){
            case 'viking':
                atackRestult = saxonRandom.receiveDamage(vikingRandom.strength);
                this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
                break;
            case 'saxon':
                atackRestult = vikingRandom.receiveDamage(saxonRandom.strength);
                this.saxonArmy = this.vikingArmy.filter(viking => viking.health > 0);
                break;
            default:
                throw new Error(`Unexpected ${mode} attack mode`);
        }

        return atackResult
    }

    vikingAttack() {
        const saxonRandom = randomElement(this.saxonArmy)
        const vikingRandom = randomElement(this.vikingArmy)

        const atackRestult = saxonRandom.receiveDamage(vikingRandom.strength)
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0); //filter te devuelve todo lo que sea "True", asi nos quitamos saxon.health < 0
        /* if (saxonRandom.health <= 0) {
            const index = this.saxonArmy.indexOf(saxonRandom)
            this.saxonArmy.splice(index, 1)
        } */
        return atackRestult;
    }

    saxonAttack() {
        const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const atackRestult = vikingRandom.receiveDamage(saxonRandom.strength)
        if (vikingRandom.health <= 0) {
            const index = this.vikingArmy.indexOf(vikingRandom)
            this.vikingArmy.splice(index, 1)
        }
        return atackRestult;
    }

    showStatus() {
        
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}

function randomElement(elements){
    const index = Math.floor(Math.random() * elements.length);
    return elements[index];
}

const warCraft = new War();