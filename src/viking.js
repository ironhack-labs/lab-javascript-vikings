// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {//攻撃・soldierの強さを返す
    return this.strength
  }
  receiveDamage(damage) {//ダメージを受けるとhealthから引かれる
    this.health -= damage
  }
}

// Viking
//バイキングはソルジャーであり、名前という追加のプロパティを持ちます。また、別の receiveDamage() メソッドと新しいメソッド battleCry() も持っています。
//Vikingクラスを修正し、Soldierを継承させ、Viking用のreceiveDamage()メソッドを再実装し、新しいbattleCry()メソッドを追加してください。
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  attack() {//攻撃・soldierの強さを返す
    return this.strength
  }
  receiveDamage(damage) {//ダメージを受けるとhealthから引かれる
    this.health -= damage
    if (this.health > 0) {//バイキングが生きているなら●ポイントのダメージを受け取る
      return `${this.name} has received ${damage} points of damage`
    } else {//バイキングは死ぬ
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return `Odin Owns You All!`//みんな泣く
  }
}

// Saxon
//サクソン人は弱い兵士です。バイキングとは異なり、サクソンには名前がありません。receiveDamage()メソッドもオリジナルのSoldierバージョンとは異なります。Saxonのコンストラクタ関数を修正し、Soldierを継承させ、Saxon用のreceiveDamage()メソッドを再実装してください。

class Saxon extends Soldier {
  attack() {//攻撃・soldierの強さを返す
    return super.attack()
  }
  receiveDamage(damage) {//ダメージを受けるとhealthから引かれる
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []//バイキング兵
    this.saxonArmy = []//サクソン兵
  }
  addViking(Viking) {//バイキング兵追加
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {//サクソン兵追加
    this.saxonArmy.push(Saxon)
  }

  //サクソン人（ランダムに選ばれる）は、バイキング（これもランダムに選ばれる）の強さに等しいダメージで、そのreceiveDamage()メソッドを呼び出されます。これは1回の攻撃だけで、サクソン人は反撃してこないはずです。 

  vikingAttack() {//バイキング攻撃
    // I don't understand!!!
    const soldierViking = this.vikingArmy(Math.floor(Math.random() * this.length))
    const soldierSaxon = this.saxonArmy(Math.floor(Math.random() * this.length))
    if (soldierSaxon.receiveDamage() === soldierViking.strength) {
      this.soldierSaxon.pop() 
    }
      return receiveDamage()
  }

  saxonAttack() {
    //I don't understand!!
  }
  
  showStatus() {
    //Why it doesn't work???
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return  "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
