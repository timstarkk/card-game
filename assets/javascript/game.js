const game = {
    chosenFighter: "",
    chosenOpponent: "",

    fighters: {
        warrior: {
            name: "warrior",
            hp: 180,
            atk: 20,
            increase: 6,
        },
        rogue: {
            name: "rogue",
            hp: 120,
            atk: 14,
            increase: 8,
        },
        mage: {
            name: "mage",
            hp: 105,
            atk: 10,
            increase: 10,
        },
        summoner: {
            name: "summoner",
            hp: 110,
            atk: 16,
            increase: 12,
        }
    },

    chooseFighters: function (e) {
        if (this.chosenFighter === "") {
            this.chosenFighter = this.fighters[e.target.id];
            console.log(this.chosenFighter);
        } else if (this.chosenOpponent === "") {
            this.chosenOpponent = this.fighters[e.target.id];
            console.log(this.chosenOpponent);
        }
    },

    moveFighters: function () {
        $('#battleground').append($(`#${this.chosenFighter.name}`));
        $('#battleground').append($(`#${this.chosenOpponent.name}`));
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

    fight: function () {
        if (this.chosenFighter !== "" && this.chosenOpponent !== "") {
            loadFirstFighter = new game.fightFunction(game.chosenFighter);
            loadFirstFighter(game.chosenOpponent);
        }
    },

    updates: function () {
        $(`#${this.chosenFighter.name}Hp`).text(`hp: ${this.chosenFighter.hp}`);
        $(`#${this.chosenOpponent.name}Hp`).text(`hp: ${this.chosenOpponent.hp}`);
    },
};


$(".fighter").on("click", function (e) {
    // x = $('.fighterSpot').offset().left;
    // y = $('.fighterSpot').offset().top;
    // console.log($('.fighterSpot').offset().left);
    // console.log($('.fighterSpot').offset().top);
    game.chooseFighters(e);
    game.moveFighters();
});

$("#attack").on("click", function (e) {
    game.fight();
    game.updates();
});