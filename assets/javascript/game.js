let x;
let y;

const game = {
    chosenFighter: "",
    chosenOpponent: "",
    fighterInPosition: false,
    enemiesDefeated: 0,

    fighters: {
        warrior: {
            name: "warrior",
            hp: 118,
            atk: 12,
            counter: 12,
            increase: 12,
        },
        rogue: {
            name: "rogue",
            hp: 112,
            atk: 13,
            counter: 26,
            increase: 13,
        },
        mage: {
            name: "mage",
            hp: 105,
            atk: 11,
            counter: 20,
            increase: 11,
        },
        summoner: {
            name: "summoner",
            hp: 99,
            atk: 16,
            counter: 29,
            increase: 16,
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
            fighter2.hp -= fighter1.atk;
            fighter1.atk += fighter1.increase;
            if (fighter2.hp > 0) {
                fighter1.hp = fighter1.hp - fighter2.counter;
            };
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