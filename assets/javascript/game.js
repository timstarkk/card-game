const fighters = {
    mage: {
        hp: 105,
        atk: 10,
        increase: 10,
    },
    rogue: {
        hp: 120,
        atk: 14,
        increase: 8,
    },
    warrior: {
        hp: 180,
        atk: 20,
        increase: 6,
    },
    summoner: {
        hp: 110,
        atk: 16,
        increase: 12,
    }
};



const fightFunction = function (fighter1) {
    const fight = function (fighter2) {
        fighter1.hp = fighter1.hp - fighter2.atk;
        fighter2.hp = fighter2.hp - fighter1.atk;
        fighter1.atk += fighter1.increase;
        fighter2.atk += fighter2.increase;
        console.log(`hit points:`);
        console.log(fighter1.hp);
        console.log(fighter2.hp);
        console.log(`attack points:`);
        console.log(fighter1.atk);
        console.log(fighter2.atk);
    }
    return fight;
};

const fightMage = new fightFunction(fighters.mage);
const fightRogue = new fightFunction(fighters.rogue);
const fightWarrior = new fightFunction(fighters.warrior);
const fightSummoner = new fightFunction(fighters.summoner);

fightMage(fighters.rogue);
