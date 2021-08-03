function getRandomAttackVal(min, max) {
  return Math.floor(Math.random() * (min, max)) + max;
}
// im using a separate function to show both ways of formulating attack

let app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerOneHealth: 100,
      roundJugado: 0,
      winner: null,
    };
  },
  computed: {
    monsterBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      if (this.playerOneHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerOneHealth + "%" };
    },

    // by attaching this computed method to html where triple attack currently is
    // we can get the same outcome as triple attach
    // especialAttack() {
    //   this.roundJugado % 3 !== 0;
    // },
  },
  watch: {
    playerOneHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player loose
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerOneHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //monster lost
        this.winner = "playerOne";
      }
    },
  },

  methods: {
    reStartGame() {
      (this.monsterHealth = 100),
        (this.playerOneHealth = 100),
        (this.roundJugado = 0),
        (this.winner = null);
    },
    attackMonster() {
      this.roundJugado++;
      let attackVal = getRandomAttackVal(10, 11);
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    attackPlayer() {
      let attackVal = Math.floor(Math.random() * (7 - 18)) + 18;
      this.playerOneHealth -= attackVal;
    },
    tripleAttack() {
      this.roundJugado++;
      let attackVal = Math.floor(Math.random() * (15 - 9)) + 9;
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    healPlayer() {
      this.roundJugado++;
      let curarHeal = Math.floor(Math.random() * (13 - 9)) + 9;
      if (this.playerOneHealth + curarHeal > 100) {
        this.playerOneHealth = 100;
      } else {
        this.playerOneHealth += curarHeal;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
});
app.mount("#game");
