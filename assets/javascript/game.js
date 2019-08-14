const game = {
    chosenFighter: "",
    chosenOpponent: "",

    fighters: {
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
    },

    fightFunction: function (fighter1) {
        const fight = function (fighter2) {
            fighter2.hp = fighter2.hp - fighter1.atk;
            fighter1.atk += fighter1.increase;
            if (fighter2.hp > 0) {
                fighter1.hp = fighter1.hp - fighter2.atk;
                fighter2.atk += fighter2.increase;
            };
            console.log(`hit points:`);
            console.log(fighter1.hp);
            console.log(fighter2.hp);
            console.log(`attack points:`);
            console.log(fighter1.atk);
            console.log(fighter2.atk);
        };
        return fight;
    },

    chooseFighter: function (e) {
        if (this.chosenFighter === "") {
            this.chosenFighter = this.fighters[e.target.id];
            console.log(this.chosenFighter);
        } else if (this.chosenOpponent === "") {
            this.chosenOpponent = this.fighters[e.target.id];
            console.log(this.chosenOpponent);
        }
    },

    fight: function () {
        if (this.chosenFighter !== "" && this.chosenOpponent !== "") {
            loadFirstFighter = new game.fightFunction(game.chosenFighter);
            loadFirstFighter(game.chosenOpponent);
        }
    },

    updates: function () {
        
    },
};


$(".fighter").on("click", function (e) {
    game.chooseFighter(e);
});

$("#attack").on("click", function (e) {
    game.fight();
    game.updates();
});