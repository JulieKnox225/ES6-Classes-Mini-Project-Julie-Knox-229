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

    set _health(damage) {
        this.health - damage;
    }

    get _atkDamage() {
        return this.atkDamage;
    }

    attack(char) {
        while(this.health > 0 && char._health() > 0) {
            char._health(this.atkDamage);

            if(char._health() > 0) {
                this._health(char._atkDamage());
            }
        }
        let winner;
        let loser;
        if(char._health() > this.health) {
            winner = char._name();
            loser = this.name;
        } else {
            winner = this.name;
            loser = char._name();
        }
        console.log(winner + ' has slain ' + loser);
    }
}

class Player extends Character {
    constructor(_name, _health, _atkDamage, _startingItem) {
        super(_name, _health, _atkDamage, false);

        this.inventory = [_startingItem];
    }

    get items(){
        return this.inventory;
    }

    set items(item) {
        this.inventory.push(item);
    }

}

class Enemy extends Character {
    constructor(_name, _health, _atkDamage, _lvl, _loot) {
        super(_name, _health, _atkDamage);

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

hero.attack(spider);
