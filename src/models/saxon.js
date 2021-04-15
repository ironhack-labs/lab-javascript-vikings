// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        /* this.health -= damage
        const life = this.health */
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }

}