class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage();

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else { return `A Saxon has died in combat`};
  }
}
