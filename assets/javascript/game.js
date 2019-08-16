let x;
let y;

const game = {
    chosenFighter: "",
    chosenOpponent: "",
    fighterInPosition: false,

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
        $(".fighter").addClass('panelClick');
        if (this.fighterInPosition === false) {
            x = $('#fighterSpot').position().left;
            y = $('#fighterSpot').position().top;
            var xi = $(`#${this.chosenFighter.name}`).position().left;
            var yi = $(`#${this.chosenFighter.name}`).position().top;
            $(`#${this.chosenFighter.name}`).animate({
                left: x,
                top: y,
            })
            this.fighterInPosition = true;
        } else {
            x = $('#opponentSpot').position().left;
            y = $('#opponentSpot').position().top;
            var xi = $(`#${this.chosenOpponent.name}`).position().left;
            var yi = $(`#${this.chosenOpponent.name}`).position().top;
            $(`#${this.chosenOpponent.name}`).animate({
                left: x,
                top: y,
            })
        }
    },

    // removePanelClickCss: function () {
    // },

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

    winLossHandler: function () {
        if (this.chosenOpponent.hp <= 0) {
            $(".fighter").removeClass('panelClick');
            $(`#${this.chosenOpponent.name}`).addClass('hidden');
            console.log(this.chosenOpponent);
            this.chosenOpponent = "";
        } else if (this.chosenFighter.hp <= 0) {
            $(".fighter").removeClass('panelClick');
            alert('you lose!')
        }
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
    game.chooseFighters(e);
    game.moveFighters();
    // game.removePanelClickCss();
});

$("#attack").on("click", function (e) {
    game.fight();
    game.updates();
    game.winLossHandler();
});