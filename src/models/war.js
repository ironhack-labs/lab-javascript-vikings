class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);

  }

  function randomElement(elements) {
    const index = Math.floor(Math.random() * elements.length);
  }

  vikingAttack() {
    const viking = randomElement(this.vikingArmy);
    const saxon = randomElement(this.saxonArmy);

    const attackResult = saxon.receiveDamage(viking.strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return attackResult;
  }

  saxonAttack() {
    const viking = randomElement(this.vikingArmy);
    const saxon = randomElement(this.saxonArmy);

    const attackResult = viking.receiveDamage(saxon.strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return attackResult;
  }

  showStatus() {
    if (saxonArmy.length === 0) {
        return (`Vikings have won the war of the century!`);
    } else if (vikingArmy.length === 0) {
            return (`Saxons have fought for their lives and survived another day...`);
      } else {
          return (`Vikings and Saxons are still in the thick of battle.`);
      }     
  }
}
