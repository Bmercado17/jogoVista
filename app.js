function getRandomAttackVal(min, max) {
  return Math.floor(Math.random() * (min, max)) + max;
}

let app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerOneHealth: 100,
      roundJugado: 0,
    };
  },
  computed: {
    monsterBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      return { width: this.playerOneHealth + "%" };
    },
  },
  // im using a separate function to show both ways of formulating attack
  methods: {
    attackMonster() {
      this.roundJugado++;
      let attackVal = getRandomAttackVal(5, 11);
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    attackPlayer() {
      let attackVal = Math.floor(Math.random() * (12 - 8)) + 8;
      this.playerOneHealth -= attackVal;
    },
    tripleAttack() {
      this.roundJugado++;
      let attackVal = Math.floor(Math.random() * (15 - 9)) + 9;
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
  },
});
app.mount("#game");
