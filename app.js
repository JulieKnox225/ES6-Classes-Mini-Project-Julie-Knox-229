class Character {
    constructor(_name, _health, _atkDamage, _npc = true) {
        this.name = _name;
        this.health = _health;
        this.atkDamage = _atkDamage;
        this.npc = _npc;
    }

    get _name() {
        return this.name;
    }

    get _health() {
        return this.health;
    }

    get _atkDamage() {
        return this.atkDamage;
    }
}

class Player extends Character {
    constructor(_name, _health, _atkDamage, _startingItem) {
        super(_name, _health, _atkDamage, false);

        this.inventory = [_startingItem];
    }

}

class Enemy extends Character {
    constructor(_name, _health, _atkDamage, _lvl, _loot) {
        super(_name, _health, _atkDamage, false);

        this.lvl = _lvl;
        this.loot = _loot;
    }
}

//Example of uses
const villager = new Character('villager', 3, 0);


const hero = new Player('Julie', 100, 100, 'healing potion');

const spider = new Enemy('spider', 50, 100, 1, 'cobwebs');

console.log(villager);
console.log(hero);
console.log(spider);